const express = require("express");
const pool = require("../config");
const path = require("path")
router = express.Router();
const multer = require('multer')
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './static/uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })
router.get("/", async function (req, res, next) {
  try {
    const query = await pool.query("SELECT * FROM Books join Book_type using (isbn) join Type using(Type_id);")
    res.json({
      book: query[0]
    });
  } catch (err) {
    return next(err)
  }
});
router.get("/User", async function (req, res, next) {
  const conn = await pool.getConnection()
  await conn.beginTransaction();
  const email = req.query.email

  try {
    let results1 = await conn.query("SELECT customer_id FROM Customer WHERE email = ?;",
      [email])

    const cusID = results1[0][0]
    let result = await conn.query("SELECT b.book_name , c.customer_img, c.start_membership, bo.date_of_borrow, bo.end_of_date, b.book_img, c.customer_id, c.fname, c.lname, c.email, c.phone_num, bp.isbn FROM Customer c left JOIN Book_possession bp ON c.customer_id = bp.customer_id left JOIN Books b on bp.isbn = b.isbn left JOIN Book_order bo on c.customer_id = bo.customer_id left JOIN Book_order_line bol on bol.order_id= bo.order_id where c.customer_id = ? group by b.book_name;",
      [cusID.customer_id])
    res.json({
      customer_info: result[0]
    })
    console.log(result[0])


  } catch (error) {
    await conn.rollback();
    next(error);
  } finally {
    console.log('finally')
    conn.release();
  }
});
router.put('/NewUser', upload.single('profile_img'), async (req, res, next) => {

  const conn = await pool.getConnection()
  await conn.beginTransaction();
  const fname = req.body.fname
  const lname = req.body.lname
  const email = req.body.email
  const phonenum = req.body.numphone
  const customer_id = req.body.customer_id
  console.log(req.body)
  try {
    const file = req.file;

    if (file) {
      await conn.query(
        "UPDATE Customer SET customer_img = ? WHERE customer_id = ?;",
        [file.path.substr(6), customer_id])
    }
    if (fname) {
      await conn.query(
        "UPDATE Customer SET fname = ? WHERE customer_id = ?;",
        [fname, customer_id])
    }
    if (lname) {
      await conn.query(
        "UPDATE Customer SET lname = ? WHERE customer_id = ?;",
        [lname, customer_id])
    }
    if (email) {
      await conn.query(
        "UPDATE Customer SET email = ? WHERE customer_id = ?;",
        [email, customer_id])
    }
    if (phonenum) {
      await conn.query(
        "UPDATE Customer SET phone_num = ? WHERE customer_id = ?;",
        [phonenum, customer_id])
    }

    conn.commit()
    res.json('success')
  } catch (error) {
    await conn.rollback();
    return next(error)
  } finally {
    console.log('finally')
    conn.release();
  }
});
router.post("/Addbook", upload.single('book_img'), async function (req, res, next) {
  const conn = await pool.getConnection()
  await conn.beginTransaction();
  const isbn = req.body.isbn
  const book_name = req.body.book_name
  const book_desc = req.body.book_desc
  const published_date = req.body.published_date
  const book_stock = req.body.book_stock
  const alias = req.body.alias
  const author = req.body.author
  const publisher_name = req.body.publisher_name
  const file = req.file;
  const type = req.body.type;

  try {
    let oldisbn = await conn.query(
      "SELECT isbn FROM Books where isbn = ?;", [
      isbn])
    if (oldisbn[0].length == 0) {
      let authorid = await conn.query(
        "SELECT author_id FROM Author where author_name = ?;", [
        author]
      )
      if (authorid[0].length == 0) { //นี่คือไม่มีAuthorเลยadd
        let newauthor = await conn.query(
          "INSERT INTO Author(author_name,author_alias) values(?,?);", [
          author, alias])
        authorid = newauthor[0].insertId
      }else{
        authorid = authorid[0][0].author_id
      }
      
      let pubid = await conn.query(
        "SELECT publisher_id FROM Publisher where publisher_name = ?;", [
        publisher_name])

      if (pubid[0].length == 0) { //นี่คือไม่มีpublisherเลยadd
        let newpub = await conn.query(
          "INSERT INTO Publisher(publisher_name) values(?);", [
          publisher_name]
        )
        pubid = newpub[0].insertId
      }
      if (file) {
        let newbook = await conn.query(
          "INSERT INTO Books VALUES(?,?,?,?,?,?,?);",
          [isbn, book_name, file.path.substr(6), book_desc, published_date, pubid, book_stock])
      }
      let newbookauthor = await conn.query(
        "INSERT INTO Book_Author(author_id,isbn) values(?,?);", [
        authorid, isbn]
      )
      let typeid = await conn.query(
        "SELECT Type_id FROM Type where book_type = ?;", [
        type]
      )
      let newbooktype = await conn.query(
        "INSERT INTO Book_type(isbn,Type_id) values(?,?);", [
        isbn, typeid[0][0].Type_id]
      )
    } else {
      res.status(401).json("This Book already in exit!")
    }


    conn.commit()
  } catch (error) {
    await conn.rollback();
    next(error);
  } finally {
    console.log('finally')
    conn.release();
  }
});

router.get("/book", async function (req, res, next) {
 
  try {
    let book = await pool.query(
      "SELECT b.* ,c.*,a.* ,t.* FROM Books b  JOIN publisher c USING(publisher_id) join book_author USING(isbn) join Author a using(author_id) join book_type using(isbn) join Type t using(type_id);"
    )
      res.send(book[0])
  } catch (error) {
    next(error)
  }
});
exports.router = router;

const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const query = await pool.query("SELECT * FROM Books join Book_type using (isbn) join Type using(Type_id);")
      res.json( { book:query[0]
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
    let result = await conn.query("SELECT b.book_name , c.start_membership, bo.date_of_borrow, bo.end_of_date, b.book_img, c.customer_id, c.fname, c.lname, c.email, c.phone_num, bp.isbn FROM Customer c JOIN Book_possession bp ON c.customer_id = bp.customer_id JOIN Books b on bp.isbn = b.isbn JOIN Book_order bo on c.customer_id = bo.customer_id JOIN Book_order_line bol on bol.order_id= bo.order_id where c.customer_id = ? group by b.book_name;;",
    [cusID.customer_id])
      res.json( { customer_info:result[0]
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

exports.router = router;

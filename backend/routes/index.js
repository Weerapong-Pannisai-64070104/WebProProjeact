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
    let result = await conn.query("SELECT c.fname, c.lname, c.email, c.phone_num, bp.isbn FROM Customer c JOIN Book_possession bp ON c.customer_id = bp.customer_id where c.customer_id = ?;",
    [cusID.customer_id])
      res.json( { customer_info:result[0]
    })
    console.log(result)

   
  } catch (error) {
    await conn.rollback();
    next(error);
  } finally {
    console.log('finally')
    conn.release();
  }
});

exports.router = router;

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
  try {
    const result = await pool.query("SELECT c.fname, c.lname, c.email, c.phone_num, bp.isbn FROM Customer c JOIN Book_possession bp ON c.customer_id = bp.customer_id;")
      res.json( { customer_info:result[0]
    });
  } catch (err) {
    return next(err)
  }
});

exports.router = router;

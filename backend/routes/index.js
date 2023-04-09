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

exports.router = router;

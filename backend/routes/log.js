const express = require("express");
const path = require("path")
const pool = require("../config");


router = express.Router();  

const multer = require('multer');
const { error } = require("console");

// Login
router.post('/SignIn',async function(req, res, next){
  const conn = await pool.getConnection()
  // Begin transaction
  await conn.beginTransaction();  
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body)
  try{
    let results = await conn.query(
        "SELECT * from Customer where email = ? and password = ?;",
        [email, password]
        );
        let results2 = await conn.query(
          "SELECT * from Admin where admin_email = ? and admin_password = ?;",
          [email, password]
          );
          if(results[0].length != 0){
            res.json(results[0])
          }else if(results2[0].length != 0){
            res.json(results2[0])
          }else{
            throw new Error(error)
          }
  } catch (err) {
    res.status(401).json("Invalid Email or Password")
  }

});

// Create new comment
router.post('/:blogId/comments', function(req, res, next){
    return
});

// Update comment
router.put('/comments/:commentId', function(req, res, next){
    return
});

// Delete comment
router.delete('/comments/:commentId', function(req, res, next){
    return
});

// Delete comment
router.put('/comments/addlike/:commentId', function(req, res, next){
    return
});


exports.router = router
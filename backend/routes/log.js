const express = require("express");
const path = require("path")
const pool = require("../config");


router = express.Router();  

const multer = require('multer')

// Get comment
router.post('/SignIn',async function(req, res, next){
    
  const email = req.body.email;
  console.log(email)
  const password = req.body.password;
  console.log(password)
  try{
    let results = await pool.query(
        "SELECT * from Customer where email = ? and password = ?;",
        [email, password]
        );
        
    console.log(results[0])
    
  } catch (err) {
    return next(err);
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
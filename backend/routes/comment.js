const express = require("express");
const path = require("path");
const pool = require("../config");
const router = express.Router();
const fs = require('fs');
// Require multer for file upload
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


// Get comment
router.get('/:blogId/comments', function(req, res, next){

});

// Create new comment
router.post('/:blogId/comments',upload.single('blog_image'), async function(req, res, next){
    const conn = await pool.getConnection()
    // Begin transaction
    await conn.beginTransaction();
    const file = req.file;
    const comment = req.body.comment;
    try {
        let results = await conn.query(
          "INSERT INTO comments(blog_id, comment, comments.like, comment_by_id) VALUES(?, ?, ?, ?);",
          [req.params.blogId, comment,'0',null]
        )
        const blogId = results[0].insertId;
    if(file){
        await conn.query(
          "INSERT INTO images(blog_id, file_path,comment_id) VALUES(?, ?, ?);",
          [req.params.blogId, file.filename,blogId])
    
    }
        
        await conn.commit()
        res.redirect(`/blogs/${req.params.blogId}`);
      } catch (err) {
        await conn.rollback();
        next(err);
      } finally {
        console.log('finally')
        conn.release();
      }
    });


// Update comment
router.put('/comments/:commentId', async function(req, res, next){
    try{
        const [rows, fields] = await pool.query("update comments set blog_id = ?, comment = ?, comments.like = ?, comment_by_id = ?, comment_date = ? where id = ?;", [
            req.body.blog_id, req.body.comment, req.body.like, req.body.comment_by_id, req.body.comment_date, req.params.commentId
        ]);
        // return json ของรายการ blogs
        return res.json({
            message:"Comment ID "+req.params.commentId+" is updated",
            comment:{
                comment:req.body.comment,
                like:req.body.like,
                comment_date:req.body.comment_date,
                comment_by_id:req.body.comment_by_id,
                blog_id:req.body.blog_id
            }
        });
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
});

// Delete comment
router.delete('/comments/:commentId', async function(req, res, next){
    try{
        const [rows, fields] = await pool.query("delete from comments where id =?;", [
            req.params.commentId
        ]);
        // return json ของรายการ blogs
        return res.json({message:"Comment ID " +req.params.commentId + ' is deleted.'});
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
});

// Delete comment
router.put('/comments/addlike/:commentId',async function(req, res, next){
    try{
        const [bog] = await pool.query("select blog_id from comments where id=?;",[
            req.params.commentId
        ])
        const [lik] = await pool.query("select comments.like from comments where id=?;",[
            req.params.commentId
        ])

        const [rows, fields] = await pool.query("update comments set comments.like = comments.like +  1 where id = ?;", [
            req.params.commentId
        ]);
        // return json ของรายการ blogs
        return res.json({
            blogId:bog[0].blog_id,
            commentId:req.params.commentId,
            likenum:lik[0].like +1
        
        
        });
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
});


exports.router = router
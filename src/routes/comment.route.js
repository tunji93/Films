const router = require("express").Router();
const commentCtrl = require("./../controllers/comment.controller");

router.post("/film/:filmId", commentCtrl.createComment);
router.get("/film/:filmId", commentCtrl.getCommentByFilmID);

router.put("/:commentId", commentCtrl.updateComment )
router.delete("/:commentId", commentCtrl.deleteComment)






module.exports = router

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
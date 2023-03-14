const router = require("express").Router();
const commentCtrl = require("./../controllers/comment.controller");

router.post("/:filmId", commentCtrl.create);
router.get("/", commentCtrl.getAll);

router.get("/:commentId", commentCtrl.getOne);
router.put("/:commentId", commentCtrl.update);
router.delete("/:commentId", commentCtrl.delete);




module.exports = router
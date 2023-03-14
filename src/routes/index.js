const router = require("express").Router();

router.use("/film", require("./film.route"));
router.use("/comment", require("./comment.route"));

module.exports = router
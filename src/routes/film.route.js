const router = require("express").Router();
const filmCtrl = require("./../controllers/film.controller");


router.get("/", filmCtrl.getAll);
router.get("/:filmId", filmCtrl.getOne);



module.exports = router
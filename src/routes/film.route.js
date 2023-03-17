const router = require("express").Router();
const filmCtrl = require("./../controllers/film.controller");


router.get("/", filmCtrl.getAllFilms);
router.get("/:filmId", filmCtrl.getOneFilm);



module.exports = router
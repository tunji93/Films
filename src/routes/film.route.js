const router = require("express").Router();
const filmCtrl = require("./../controllers/film.controller");

router.post("/", filmCtrl.create);
router.get("/", filmCtrl.getAll);
router.get("/:filmId", filmCtrl.getOne);
router.put("/:filmId", filmCtrl.update);
router.delete("/:filmId", filmCtrl.delete);


module.exports = router
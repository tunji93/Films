const FilmServ = require("../services/film.service");
const response = require("../utils/response");

class FilmContoller {
  
  async getAll(req, res) {
    const result = await FilmServ.getAll();
    res.status(200).send(response("All films", result));
  }

  async getOne(req, res) {
    const result = await FilmServ.getOne(req.params.filmId);
    res.status(200).send(response("Film data", result));
  }
}

module.exports = new FilmContoller();

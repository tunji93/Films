const FilmServ = require("../services/film.service");
const response = require("../utils/response");

class FilmContoller {
  
  async getAllFilms(req, res) {
    const result = await FilmServ.getAllFilms();
    res.status(200).send(response("All films", result));
  }

  async getOneFilm(req, res) {
    const result = await FilmServ.getOneFilm(req.params.filmId);
    res.status(200).send(response("Film data", result));
  }
}

module.exports = new FilmContoller();

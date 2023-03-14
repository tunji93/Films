const FilmServ = require("../services/film.service");
const response = require("../utils/response");

class FilmContoller {
  async create(req, res) {
    const result = await FilmServ.create(req.body);
    res.status(200).send(response("Film created", result));
  }

  async getAll(req, res) {
    const result = await FilmServ.getAll();
    res.status(200).send(response("All films", result));
  }

  async getOne(req, res) {
    const result = await FilmServ.getOne(req.params.filmId);
    res.status(200).send(response("Film data", result));
  }

  async update(req, res) {
    const result = await FilmServ.update(req.params.filmId, req.body);
    res.status(200).send(response("Film updated", result));
  }

  async delete(req, res) {
    const result = await FilmServ.delete(req.params.filmId);
    res.status(200).send(response("Film deleted", result));
  }
}

module.exports = new FilmContoller();
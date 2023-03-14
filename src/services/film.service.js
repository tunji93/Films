const Film = require("../models/film.model");
const CustomError = require("../utils/custom-error");
class FilmService {
  async create(data) {
    return await new Film(data).save();
  }

  async getAll() {
    return await Film.find({}, {  __v: 0 });
  }

  async getOne(filmId) {
    const film = await Film.findOne(
      { _id: filmId },
      {  __v: 0 }
    );
    if (!film) throw new CustomError("Film does not exist");

    return film
  }

  async update(filmId, data) {
    const film = await Film.findByIdAndUpdate(
      { _id: filmId },
      { $set: data },
      { new: true }
    );

    if (!film) throw new CustomError("Film dosen't exist", 404);

    return film;
  }

  async delete(filmId) {
    const film = await Film.findOne({ _id: filmId });
    film.remove()
    return film
  }
}

module.exports = new FilmService();
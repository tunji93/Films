const Film = require("../models/film.model");
const CustomError = require("../utils/custom-error");
class FilmService {
  async create(data) {
    return await new Film(data).save();
  }

  async backfillFilms() {
    const starWarsFilms = await (
      await fetch("https://swapi.dev/api/films")
    ).json();
    return starWarsFilms.results.map(({ title, release_date }) => {
      return { title, releaseDate: release_date, backfill: true };
    });
  }

  async getAll() {
    const backfilled = await Film.find({ backfill: true }, { __v: 0 });
    console.log("backfilled data" + JSON.stringify(backfilled, null, 4));
    if (!backfilled.length) {
      console.log("back filling data ");
      const startWarsData = await this.backfillFilms();
      await Film.insertMany(startWarsData);
    }
    return await Film.find(
      {},
      { __v: 0, backfill: 0 },
      { sort: { releaseDate: 1 } }
    );
  }

  async getOne(filmId) {
    const film = await Film.findOne({ _id: filmId }, { __v: 0 });
    if (!film) throw new CustomError("Film does not exist");

    return film;
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
    film.remove();
    return film;
  }
}

module.exports = new FilmService();

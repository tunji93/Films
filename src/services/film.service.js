const Film = require("../models/film.model");
const CustomError = require("../utils/custom-error");
class FilmService {
  

  async backfillFilms() {
    const starWarsFilms = await (
      await fetch("https://swapi.dev/api/films")
    ).json();
    return starWarsFilms.results.map(({ title, release_date }) => {
      return { title, releaseDate: release_date, backfill: true };
    });
  }

  async getAllFilms() {
    const backfilled = await Film.find({ backfill: true }, { __v: 0 });

    if (!backfilled.length) {
      const startWarsData = await this.backfillFilms();
      await Film.insertMany(startWarsData);
    }
    return await Film.find(
      {},
      { __v: 0, backfill: 0 },
      { sort: { releaseDate: 1 } }
    );
  }

  async getOneFilm(filmId) {
    const film = await Film.findOne({ _id: filmId }, { __v: 0 });
    if (!film) throw new CustomError("Film does not exist");

    return film;
  }

  
}

module.exports = new FilmService();

const FilmService = require("./film.service");
const FilmModel = require("../models/film.model");
const mockingoose = require("mockingoose");

fetch = jest.fn().mockReturnValue({
  results: [],
});
const films_mock = [
  {
    _id: "507f191e810c19729de860ea",
    title: "Avengers endgame",
    releaseDate: new Date(2020),
    commentCount: 0,
  },
  {
    _id: "507f191e810c19729de860eb",
    title: "Into the spider verse",
    releaseDate: new Date(2021),
    commentCount: 0,
  },
  {
    _id: "507f191e810c19729de860ec",
    title: "The amazing spiderman",
    releaseDate: new Date(2019),
    commentCount: 0,
  },
];

const serializeObject = (data) => JSON.parse(JSON.stringify(data));
describe("Film service test", () => {
  
  it("should find film by filmId", async () => {
    mockingoose(FilmModel).toReturn(films_mock[0], "findOne");
    const film = await FilmService.getOne(films_mock[0]._id);
    expect(serializeObject(film)).toEqual(serializeObject(films_mock[0]));
  });
  it("should get all films", async () => {
    mockingoose(FilmModel).toReturn(films_mock, "find");
    const films = await FilmService.getAll();

    expect(serializeObject(films)).toEqual(serializeObject(films_mock));
  });
});

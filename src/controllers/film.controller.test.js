const FilmController = require("./film.controller");
const FilmService = require("../services/film.service");
const response = require("../utils/response");

jest.mock("../services/film.service");

describe("FilmController", () => {
  describe("create", () => {
    it("should create a new film and return success response", async () => {
      const mockReq = {
        body: { title: "Test Film", director: "Test Director" },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const mockResult = {
        _id: "123",
        title: "Test Film",
        director: "Test Director",
      };
      FilmService.create.mockResolvedValueOnce(mockResult);

      await FilmController.create(mockReq, mockRes);

      expect(FilmService.create).toHaveBeenCalledWith(mockReq.body);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith(
        response("Film created", mockResult)
      );
    });
  });

  describe("getAll", () => {
    it("should get all films and return success response", async () => {
      const mockReq = {};
      const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const mockResult = [
        { _id: "123", title: "Test Film", director: "Test Director" },
      ];
      FilmService.getAll.mockResolvedValueOnce(mockResult);

      await FilmController.getAll(mockReq, mockRes);

      expect(FilmService.getAll).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith(
        response("All films", mockResult)
      );
    });
  });

  describe("getOne", () => {
    it("should get one film and return success response", async () => {
      const mockReq = { params: { filmId: "123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const mockResult = {
        _id: "123",
        title: "Test Film",
        director: "Test Director",
      };
      FilmService.getOne.mockResolvedValueOnce(mockResult);

      await FilmController.getOne(mockReq, mockRes);

      expect(FilmService.getOne).toHaveBeenCalledWith(mockReq.params.filmId);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith(
        response("Film data", mockResult)
      );
    });
  });

  describe("update", () => {
    it("should update a film and return success response", async () => {
      const mockReq = {
        params: { filmId: "123" },
        body: { title: "New Title" },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const mockResult = {
        _id: "123",
        title: "New Title",
        director: "Test Director",
      };
      FilmService.update.mockResolvedValueOnce(mockResult);

      await FilmController.update(mockReq, mockRes);

      expect(FilmService.update).toHaveBeenCalledWith(
        mockReq.params.filmId,
        mockReq.body
      );
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith(
        response("Film updated", mockResult)
      );
    });
  });
});

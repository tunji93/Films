const CommentContoller = require("./comment.controller");
const CommentServ = require("../services/comment.service");
const response = require("../utils/response");

jest.mock("../services/comment.service");

describe("CommentContoller", () => {
  let req;
  let res;

  beforeEach(() => {
    req = { params: { commentId: "comment#1" } };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("create", () => {
    it("should create a comment and return success message with status 200", async () => {
      const filmID = "123";
      const mockComment = { text: "test comment" };
      CommentServ.create.mockResolvedValue(mockComment);

      req.params = { filmId: filmID };
      req.body = mockComment;
      await CommentContoller.create(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(
        response("Comment created", mockComment)
      );
    });
  });

  describe("getAll", () => {
    it("should return all comments for a film with status 200", async () => {
      const filmId = "123";
      const mockComments = [
        { text: "test comment 1" },
        { text: "test comment 2" },
      ];
      CommentServ.getAll.mockResolvedValue(mockComments);

      req.query = { filmid: filmId };
      await CommentContoller.getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(
        response("All comments", mockComments)
      );
    });
  });
});

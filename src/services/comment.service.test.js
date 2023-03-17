const CommentService = require("./comment.service");
const CommentModel = require("../models/comment.model");
const FilmModel = require("../models/film.model");
const mockingoose = require("mockingoose");

const comments_mock = [
  {
    _id: "507f191e810c19729de860ea",
    comment: "awesome movie RDJ always kills it",
  },
  {
    _id: "507f191e810c19729de860eb",
    comment: "awesome movie tom holland is such a good actor",
  },
  {
    _id: "507f191e810c19729de860ec",
    comment: "This is why it is called the AMASING Spiderman",
  },
];

const spys = {
  comment: {
    findOne: jest.spyOn(CommentModel, "findOne"),
    findByIdAndUpdate: jest.spyOn(CommentModel, "findByIdAndUpdate"),
  },
  film: {
    findOne: jest.spyOn(FilmModel, "findOne"),
    updateOne: jest.spyOn(FilmModel, "updateOne"),
  },
};

const serializeObject = (data) => JSON.parse(JSON.stringify(data));
describe("Comment service test", () => {
  beforeEach(() => {
    mockingoose(FilmModel).toReturn(
      {
        _id: "537f191e810c19729de860ec",
        title: "The God Father",
        releaseDate: new Date(),
        commentCount: 0,
      },
      "findOne"
    );
    mockingoose(FilmModel).toReturn(
      {
        _id: "537f191e810c19729de860ec",
        title: "The God Father",
        releaseDate: new Date(),
        commentCount: 1,
      },
      "updateOne"
    );
  });
  it("should create comment", async () => {
    const comment_enrty = {
      film: "537f191e810c19729de860ec",
      comment: "nice movie",
    };

    mockingoose(CommentModel).toReturn(comment_enrty, "save");

    const newComment = await CommentService.create(
      { comment: "nice movie" },
      "537f191e810c19729de860ec"
    );

    expect
    expect(newComment.comment).toEqual("nice movie");
    expect(serializeObject(newComment)._id).not.toBeNull();
  });
  it("should update commentCount on Films model on comment create ", async () => {
    const comment_enrty = {
      film: "537f191e810c19729de860ec",
      comment: "nice movie",
    };

    mockingoose(CommentModel).toReturn(comment_enrty, "save");

    const newComment = await CommentService.create(
      { comment: "nice movie" },
      "537f191e810c19729de860ec"
    );
    expect(spys.film.updateOne).toHaveBeenCalled();
    expect(spys.film.findOne).toHaveBeenCalled();
    expect(spys.film.updateOne).toHaveBeenCalledWith(
      { _id: "537f191e810c19729de860ec" },
      { $inc: { commentCount: 1 } }
    );
  });
  
  it("should get all comments", async () => {
    mockingoose(CommentModel).toReturn(comments_mock, "find");
    const comments = await CommentService.getAll();

    expect(serializeObject(comments)).toEqual(serializeObject(comments_mock));
  });
});

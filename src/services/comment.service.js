const Comment = require("../models/comment.model");
const Film = require("../models/film.model");
const CustomError = require("../utils/custom-error");
class CommentService {
  async create(data, filmId) {
    const film = await Film.findOne({_id : filmId})
    if (!film) throw new CustomError("Film does not exist");
    if (data.comment && data.comment.trim().length > 500) throw new CustomError("The maximum comment length is 500");
    const record = {...data,film:filmId}
    return await new Comment(record).save();
  }

  async getAll(filmId) {
    console.log(filmId)
    const comments =  await Comment.find(filmId?{film:filmId}:{}, {  __v: 0, film:0 });
    if (!comments) console.log("no comments")
    if (!comments) throw new CustomError("Comment does not exist");

    return comments
}

  async getOne(commentId) {
    const comment = await Comment.findOne(
      { _id: commentId },
      {  __v: 0 }
    );
    if (!comment) throw new CustomError("Comment does not exist");

    return comment
  }

  async update(commentId, data) {
    const comment = await Comment.findByIdAndUpdate(
      { _id: commentId },
      { $set: data },
      { new: true }
    );

    if (!comment) throw new CustomError("Comment dosen't exist", 404);

    return comment;
  }

  async delete(commentId) {
    const comment = await Comment.findOne({ _id: commentId });
    comment.remove()
    return comment
  }
}

module.exports = new CommentService();
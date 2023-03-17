const Comment = require("../models/comment.model");
const Film = require("../models/film.model");
const CustomError = require("../utils/custom-error");

class CommentService {
  async createComment(data, filmId) {
    const film = await Film.findOne({ _id: filmId });
    if (!film) throw new CustomError("Film does not exist");
    if (data.comment && data.comment.trim().length > 500)
      throw new CustomError("The maximum comment length is 500");
    const record = { ...data, film: filmId };
    return await new Comment(record).save();
  }

  async getCommentsByFilmID(filmId) {
    const comments = await Comment.find(
      filmId ? { film: filmId } : {},
      {
        __v: 0,
        film: 0,
      },
      { sort: { createdAt: 1 } }
    );
    if (!comments) throw new CustomError(`Film does not have comments`);

    return  comments ;
  }



  async updateComment(commentId, data) {
    const comment = await Comment.findByIdAndUpdate(
      { _id: commentId },
      { $set: data },
      { new: true }
    );

    if (!comment) throw new CustomError("Comment dosen't exist", 404);

    return comment;
  }

  async deleteComment(commentId) {
    const comment = await Comment.findOne({ _id: commentId });
    comment.remove();
    return comment;
  }
}

// const Comment = require("../models/comment.model");
// const Film = require("../models/film.model");
// const CustomError = require("../utils/custom-error");

// class CommentService {
//   async createComment(data, filmId) {
//     const film = await Film.findOne({ _id: filmId });
//     if (!film) throw new CustomError("Film does not exist");
//     if (data.comment && data.comment.trim().length > 500)
//       throw new CustomError("The maximum comment length is 500");
//     const record = { ...data, film: filmId };
//     return await new Comment(record).save();
//   }

//   async getCommentsByFilmID(filmId) {
//     const comments = await Comment.find(
//       filmId ? { film: filmId } : {},
//       {
//         __v: 0,
//         film: 0,
//       },
//       { sort: { createdAt: 1 } }
//     );
//     if (!comments) throw new CustomError(`Film does not have comments`);


 module.exports = new CommentService();

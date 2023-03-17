const CommentServ = require("../services/comment.service");
const response = require("../utils/response");

class CommentContoller {
  async createComment(req, res) {
    const filmID = req.params.filmId;
    const result = await CommentServ.createComment(req.body, filmID);
    res.status(200).send(response("Comment created", result));
  }

  async getCommentByFilmID(req, res) {
    const filmId = req.params.filmId;

    const result = await CommentServ.getCommentsByFilmID(filmId);

    res.status(200).send(response("All comments", result));
  }

  async updateComment(req, res) {
    const result = await CommentServ.updateComment(
      req.params.commentId,
      req.body
    );
    res.status(200).send(response("Comment updated", result));
  }

  async deleteComment(req, res) {
    const result = await CommentServ.deleteComment(req.params.commentId);
    res.status(200).send(response("Comment deleted", result));
  }
}

module.exports = new CommentContoller();

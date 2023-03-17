const CommentServ = require("../services/comment.service");
const response = require("../utils/response");

class CommentContoller {
  async create(req, res) {
    const filmID = req.params.filmId;
    const result = await CommentServ.create(req.body, filmID);
    res.status(200).send(response("Comment created", result));
  }

  async getAll(req, res) {
    const filmId = req.query.filmid;

    const result = await CommentServ.getAll(filmId);

    res.status(200).send(response("All comments", result));
  }

  async getOne(req, res) {
    const result = await CommentServ.getOne(req.params.commentId);
    res.status(200).send(response("Comment data", result));
  }

  async update(req, res) {
    const result = await CommentServ.update(req.params.commentId, req.body);
    res.status(200).send(response("Comment updated", result));
  }

  async delete(req, res) {
    const result = await CommentServ.delete(req.params.commentId);
    res.status(200).send(response("Comment deleted", result));
  }
}

module.exports = new CommentContoller();

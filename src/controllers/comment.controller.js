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

  

  
}

module.exports = new CommentContoller();

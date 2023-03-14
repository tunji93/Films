const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { BCRYPT_SALT } = require("../config")
const Film = require("./film.model")
const Schema = mongoose.Schema;


const commentSchema = new Schema(
  {
    comment: {
      type: String,
      trim: true,
      required: [true, "Comment is required"],
    },
    film : {
      type: String,
      trim: true,
      required: [true, "Film is required"],
    },
  
  },
  {
    timestamps: true
  }
);

commentSchema.post("save", async function(next) {
  const film = await Film.updateOne(
      {_id : 
          this.film}
          ,
    {$inc :{commentCount : 1}}
  )

} )
commentSchema.post("remove", async function(next) {
  const film = await Film.updateOne(
      {_id : 
          this.film}
          ,
    {$inc :{commentCount : -1}}
  )

} )



module.exports = mongoose.model('comments', commentSchema)
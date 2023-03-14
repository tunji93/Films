const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { BCRYPT_SALT } = require("../config")
const Schema = mongoose.Schema;


const filmSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    releaseDate: {
      type: Date,
      required: [true, 'Release date is required']
    },
    commentCount : {
      type : Number,
      default: 0
    }
  }
);

module.exports = mongoose.model('films', filmSchema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
  },
  releaseDate: {
    type: Date,
    required: [true, "Release date is required"],
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  backfill: {
    type: Boolean,
  },
});

module.exports = mongoose.model("films", filmSchema);

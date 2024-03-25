const mongoose = require("mongoose");
const User = require('./Users');
const Comment = require("./Comments");

const commentSchema = new mongoose.Schema({
  owner: String, 
  comment: String
});


const moviesSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: Number,
  picture: String,
  summary: String,
  actors: String,
  director: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: User },
  comments: [commentSchema]

}, 
{ timestamps: true });

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
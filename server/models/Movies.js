const mongoose = require("mongoose");


const moviesSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: Number,
  picture: String,
  summary: String,
  actors: String,
  director: String

}, 
{ timestamps: true });

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
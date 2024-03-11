const mongoose = require("mongoose");


const moviesSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: Number,

}, 
{ timestamps: true });

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
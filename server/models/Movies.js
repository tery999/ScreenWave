const mongoose = require("mongoose");
const User = require('./Users')


const moviesSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: Number,
  picture: String,
  summary: String,
  actors: String,
  director: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: User },

}, 
{ timestamps: true });

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
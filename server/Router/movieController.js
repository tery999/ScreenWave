const express = require("express");
const Movie = require("../models/Movies");
const router = express.Router();

router.get("/", async (req, res) => {
    const allMovies = await Movie.find()
    console.log(allMovies);
    res.json(allMovies);
 })

 module.exports = router;
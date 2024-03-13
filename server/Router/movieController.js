const express = require("express");
const Movie = require("../models/Movies");
const router = express.Router();

router.get("/", async (req, res) => {
    const allMovies = await Movie.find()
    console.log(allMovies);
    res.json(allMovies);
 })

 router.post("/Add", async (req, res) => {
    const movieInfo = req.body;
    await Movie.create(movieInfo);
    res.status(200).send("Movie Added");
 })

 module.exports = router;
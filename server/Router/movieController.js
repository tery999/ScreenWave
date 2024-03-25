const express = require("express");
const Movie = require("../models/Movies");
const router = express.Router();
const AuthenticationMIddleware = require("../AuthenticationMiddleware");

//need auth middleware only for these movie routes
router.post("*", AuthenticationMIddleware);
router.put("*", AuthenticationMIddleware);
router.delete("*", AuthenticationMIddleware);

router.get("/", async (req, res) => {
   const allMovies = await Movie.find()
   console.log(allMovies);
   res.json(allMovies);
})

router.get("/Random", async (req, res) => {
   try {
      const randomMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
      console.log(randomMovie);
      res.json(randomMovie[0]);
   } catch (err) {
      res.status(400).json(err);
   }

})

router.get("/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const allMovies = await Movie.findById(id)
      console.log(allMovies);
      res.json(allMovies);
   } catch (err) {
      res.status(400).json(err);
   }

})

router.post("/Add", async (req, res) => {
   const movieInfo = req.body;
   await Movie.create(movieInfo);
   res.status(200).send("Movie Added");
})

router.put("/Edit/:id", async (req, res) => {
   try {
      const movieId = req.params.id
      console.log("CHECK THE ID", movieId);
      const updateInfo = req.body;
      console.log("CHECK THE BODY", updateInfo);
      const returnedMovie = await Movie.findByIdAndUpdate(movieId, updateInfo, {
         new: true
      })
      res.json(returnedMovie);
   } catch (err) {
      console.log("Error from BE", err);
      res.status(400).json(err);
   }
})

router.delete("/Delete/:id", async (req, res) => {
   try {
      const movieId = req.params.id
      await Movie.findByIdAndDelete(movieId);
      res.json({ message: "Movie deleted" });
   } catch (err) {
      res.status(400).json(err);
   }
})

//Comments Section

router.post("/Comments/:id/Add", async (req, res) => {
   console.log("COMMENTS ID POST FIRED");
   try {
      const movieId = req.params.id;
      const commentInfo = req.body;
      console.log("COMMENTS INFO", commentInfo)
      updatedMovie = await Movie.findByIdAndUpdate(movieId , { $push: { comments: commentInfo } });
      res.json(updatedMovie);
   } catch (err) {
      res.status(400).json(err);
   }
})


module.exports = router;
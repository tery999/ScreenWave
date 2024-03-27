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
   // console.log(allMovies);
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
      const {owner, comment, username} = req.body;
      commentInfo = {
         owner:owner,
         comment:comment,
         username:username
      }
      console.log("COMMENTS INFO", commentInfo)
      updatedMovie = await Movie.findByIdAndUpdate(movieId , { $push: { comments: commentInfo } , new:true });
      res.json(updatedMovie);
   } catch (err) {
      res.status(400).json(err);
   }
});

router.get("/Comments/:id/All", async (req, res) => {
   try {
      const movieId = req.params.id;
      const allMovieComments = await Movie.find( {_id:movieId}, {comments:1})
      const currentComments = allMovieComments[0].comments;
      console.log("CURRENT MOVIE COMMENTS:", currentComments)
      if (currentComments.length===0) {
         return res.status(400).json({message:"No comments"});
      }
      res.json(currentComments);
   } catch (err) {
      res.status(400).json(err);
   }
})

router.put("/Comments/:id/Delete", async (req,res)=> {
   try {
      const movieId = req.params.id;
      const {commentId} = req.body;
      console.log("COMMENT ID", commentId);
      console.log("MOVIEID", movieId);
      const deletedComment = await Movie.findOneAndUpdate( 
         {_id: movieId},
         {$pull: { comments: {_id: commentId}}}
         )
      res.json({message: "Comment Deleted"});
   } catch (err) {
      res.status(400).json(err);
   }
})


module.exports = router;
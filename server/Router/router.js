const express = require("express");
const router = express.Router();
const movieController = require("./movieController");

router.use("/Movies", movieController)

module.exports = router;
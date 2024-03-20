const express = require("express");
const router = express.Router();
const movieController = require("./movieController");
const userController = require("./userController");

router.use("/Movies", movieController);
router.use("/Users", userController);

module.exports = router;
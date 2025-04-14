const express = require("express");
const router = express.Router();
const { getMovies, getMovieById } = require("../controllers/movieController");
const authenticate = require("../middleware/authMiddleware");

router.get("/", authenticate, getMovies);
router.get("/:id", authenticate, getMovieById);

module.exports = router;

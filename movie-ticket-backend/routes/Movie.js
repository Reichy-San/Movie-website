const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one movie by title
router.get('/:title', async (req, res) => {
    try {
        const movie = await Movie.findOne({ title: req.params.title });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

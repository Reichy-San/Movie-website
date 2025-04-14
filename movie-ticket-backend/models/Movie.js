const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    description: String,
    trailerUrl: String,
    poster: String,
    quality: [String],
    downloadLinks: [
        {
            server: String,
            quality: String,
            link: String,
        },
    ],
});

module.exports = mongoose.model('Movie', MovieSchema);

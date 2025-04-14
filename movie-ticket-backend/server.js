// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/Movie');

const app = express();

// Get MongoDB URI from the .env file
const MONGO_URI = process.env.MONGO_URI;

console.log("MongoDB URI:", MONGO_URI);

if (!MONGO_URI) {
    console.error("❌ MongoDB URI is undefined. Please check your .env file.");
    process.exit(1);  // Exit the application if URI is not found
}

// Connect to MongoDB without deprecated options
const mongoose = require('mongoose');
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

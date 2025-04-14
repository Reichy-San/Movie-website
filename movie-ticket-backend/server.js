const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB(); // 🔁 This replaces the inline mongoose.connect()

// Middleware
app.use(bodyParser.json());

// Routes
const authRoutes = require("./routes/AuthRoutes");
const movieRoutes = require("./routes/MovieRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

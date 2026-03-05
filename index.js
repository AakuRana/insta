// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------------
// Middleware
// ---------------------

// Parse form data (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.) from "public" folder
app.use(express.static(path.join(dirname, "public")));

// ---------------------
// View Engine Setup
// ---------------------
app.set("view engine", "ejs");
app.set("views", path.join(dirname, "views"));

// ---------------------
// Routes
// ---------------------

// Home page - show the register form
app.get("/", (req, res) => {
    res.render("index");
});

// User routes (POST /user/register)
app.use("/user", userRoutes);

// ---------------------
// Start Server
// ---------------------
async function startServer() {
    await connectDB(); // Connect to MongoDB Atlas first
    app.listen(PORT, () => {
        console.log(` Server running at http://localhost:${PORT}`);
    });
}

startServer();

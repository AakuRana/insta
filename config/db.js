const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("✅ MongoDB Atlas Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
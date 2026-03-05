const mongoose = require("mongoose");

// User Schema - stores username and password (plain text for learning only)
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
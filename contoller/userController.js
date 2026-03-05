const User = require("../models/User");

// Handle user form submission
async function createUser(req, res) {
    try {
        const { username, password } = req.body;

        // Create a new user in MongoDB
        await User.create({ username, password });

        // Send a blank white page after successful submission
        res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Success</title></head>
        <body style="background-color: white;"></body>
      </html>
    `);
    } catch (error) {
        console.error("❌ Error creating user:", error.message);
        res.status(500).send("Something went wrong!");
    }
}

module.exports = { createUser };
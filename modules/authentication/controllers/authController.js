// modules/authentication/controllers/authController.js
// Assuming you have a User model imported
const User = require('../models/userModel');

// Login controller
const login = async (req, res) => {
    // try {
    //     // Logic to authenticate user
    //     // Assuming you have username and password in req.body
    //     const { username, password } = req.body;

    //     // Authenticate user
    //     const user = await User.findOne({ username, password });

    //     if (!user) {
    //         // User not found or invalid credentials
    //         return res.status(401).json({ error: 'Invalid credentials' });
    //     }

    //     // User authenticated successfully
    //     // You might generate and send a JWT token here
    //     return res.status(200).json({ message: 'Login successful', user });

    // } catch (error) {
    //     // Error handling
    //     console.error('Error during login:', error);
    //     return res.status(500).json({ error: 'Internal server error' });
    // }
    return res.status(200).json({ 'message': 'Login successful'});
};

// Register controller
const register = async (req, res) => {
    console.log("HI there");
};

module.exports = {
    login,
    register
};

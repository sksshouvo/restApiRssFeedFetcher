// modules/authentication/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.post('/login', authController.login);
console.log("HI there");
router.post('/register', authController.register);
console.log("HI there");
// Define other authentication routes...

module.exports = router;

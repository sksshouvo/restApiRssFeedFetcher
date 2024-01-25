// modules/authentication/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const public = require('./public');
router.use('/public', public);
// Define other authentication routes...

module.exports = router;

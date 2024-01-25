// routes/index.js
const express = require('express');
const router = express.Router();
const authRoutes = require('../../modules/authentication/routes/authRoutes');
router.use('/authenticaion', authRoutes);
module.exports = router;

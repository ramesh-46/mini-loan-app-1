// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');  // Import controller functions

// POST request to register a new user
router.post('/register', register);

// POST request to log in an existing user
router.post('/login', login);

module.exports = router;

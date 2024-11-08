// backend/routes/loanRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Import the authMiddleware

// Loan application POST route (protected)
router.post('/apply', authMiddleware, (req, res) => {
  const { amount, duration, purpose } = req.body;

  if (!amount || !duration || !purpose) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Here, you would typically process the loan application (store it in DB, etc.)
  res.status(200).json({ message: 'Loan application submitted successfully!' });
});

module.exports = router;

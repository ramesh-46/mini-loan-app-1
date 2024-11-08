const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // If using a local database, you can omit this
const authRoutes = require('./routes/auth'); // Authentication routes
const loanRoutes = require('./routes/loans'); // Loan routes

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Middleware for Cross-Origin Resource Sharing

// Routes setup
app.use('/api/auth', authRoutes); // Route for user authentication
app.use('/api/loans', loanRoutes); // Route for loan requests

// Root route to confirm server is working
app.get('/', (req, res) => {
  res.send('Server is running on localhost:5000');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const Loan = require('../models/Loan');

// Create a loan
exports.createLoan = async (req, res) => {
  try {
    const { amount, term, userEmail } = req.body;

    // Log the request body to check what's being received
    console.log("Request Body:", req.body);

    if (!amount || !term || !userEmail) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Calculate the repayments for the loan
    const repayments = Array.from({ length: term }, (_, i) => ({
      dueDate: new Date(Date.now() + (i + 1) * 7 * 24 * 60 * 60 * 1000), // Weekly repayments
      amount: parseFloat((amount / term).toFixed(2)),
      status: 'PENDING',
    }));

    // Create the loan object
    const loan = new Loan({ amount, term, userEmail, repayments });

    // Save the loan to the database
    await loan.save();
    console.log('Loan created successfully:', loan);
    res.status(201).json(loan);
  } catch (error) {
    console.error('Error creating loan:', error);
    res.status(500).json({ message: 'Failed to create loan.', error });
  }
};

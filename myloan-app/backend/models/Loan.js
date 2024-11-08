// backend/models/Loan.js
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  term: { type: Number, required: true },
  userEmail: { type: String, required: true },
  repayments: [
    {
      dueDate: { type: Date, required: true },
      amount: { type: Number, required: true },
      status: { type: String, required: true, enum: ['PENDING', 'PAID'] },
    },
  ],
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;

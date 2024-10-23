const Transaction = require('../models/transaction');

// Create a new transaction
exports.createTransaction = async (req, res) => {
  const { type, category, amount, date, description } = req.body;
  if (!type || !category || !amount || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transaction = await Transaction.create({
      type,
      category,
      amount,
      date,
      description,
      userId: req.user.id // Assuming authentication is enabled
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ where: { userId: req.user.id } });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transactions' });
  }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findOne({ where: { id, userId: req.user.id } });
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transaction' });
  }
};

// Update transaction
exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;

  try {
    const transaction = await Transaction.findOne({ where: { id, userId: req.user.id } });
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

    const updatedTransaction = await transaction.update({ type, category, amount, date, description });
    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update transaction' });
  }
};

// Delete transaction
exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findOne({ where: { id, userId: req.user.id } });
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

    await transaction.destroy();
    res.json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
};

// Get summary of transactions
exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ where: { userId: req.user.id } });

    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const balance = income - expenses;

    res.json({ totalIncome: income, totalExpenses: expenses, balance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve summary' });
  }
};

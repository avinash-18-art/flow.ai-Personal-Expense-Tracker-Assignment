const express = require('express')
const router = express.Router()
const {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getSummary,
} = require('../controllers/transactions')
const {authenticateToken} = require('../config/auth')

// Protect all routes with JWT authentication
router.post('/transactions', authenticateToken, createTransaction)
router.get('/transactions', authenticateToken, getTransactions)
router.get('/transactions/:id', authenticateToken, getTransactionById)
router.put('/transactions/:id', authenticateToken, updateTransaction)
router.delete('/transactions/:id', authenticateToken, deleteTransaction)
router.get('/summary', authenticateToken, getSummary)

module.exports = router

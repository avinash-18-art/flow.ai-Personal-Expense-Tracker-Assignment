const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const userRoutes = require('./routes/users')
const transactionRoutes = require('./routes/transactions')
const errorHandler = require('./middleware/errorHandler')

// Middleware
app.use(express.json())

// Routes
app.use('/api', userRoutes)
app.use('/api', transactionRoutes)

// Error handler middleware
app.use(errorHandler)

// Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Transaction = sequelize.define('Transaction', {
  type: {type: DataTypes.STRING, allowNull: false}, // 'income' or 'expense'
  category: {type: DataTypes.STRING, allowNull: false},
  amount: {type: DataTypes.FLOAT, allowNull: false},
  date: {type: DataTypes.DATE, allowNull: false},
  description: {type: DataTypes.STRING},
})

module.exports = Transaction

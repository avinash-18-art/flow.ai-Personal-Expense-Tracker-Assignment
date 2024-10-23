const {Sequelize} = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // SQLite file location
})

sequelize.sync() // Automatically create tables
module.exports = sequelize

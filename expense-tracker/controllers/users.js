const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Register user
exports.registerUser = async (req, res) => {
  try {
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({username, password: hashedPassword})
    res.status(201).json({message: 'User registered successfully', user})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Login user
exports.loginUser = async (req, res) => {
  try {
    const {username, password} = req.body
    const user = await User.findOne({where: {username}})
    if (!user) return res.status(404).json({error: 'User not found'})

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword)
      return res.status(403).json({error: 'Incorrect password'})

    const token = jwt.sign(
      {id: user.id, username: user.username},
      process.env.JWT_SECRET,
      {expiresIn: '1h'},
    )
    res.json({token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

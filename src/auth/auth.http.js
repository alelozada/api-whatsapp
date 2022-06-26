// ? Dependencies
const jwt = require('jsonwebtoken')

// ? Import files
const authController = require('./auth.controllers')
const userController = require('../users/users.controllers')
const config = require('../config')
const { to } = require('../tools/to')


// * ---- Verificación de usuarios ----

const loginUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({message: "Missing data"})
  } else if (!req.body.email || !req.body.password) {
    return res.status(400).json({message: "Missing data"})
  }

  const [response, err] = await to(authController.checkUsersCredential(
    req.body.email,
    req.body.password
  ))

  if (err || !response) {
    return res.status(401).json({message: "Invalid Credential"})
  }

  const [user, error] = await to(userController.getUserByEmail(req.body.email))
  
  if (error || !user) {
    return res.status(401).json({message: "Invalid Credential"})
  }
  
  const token = jwt.sign({
    id: user.id,
    email: req.body.email
  }, config.jwtSecret)
  res.status(200).json({token: token})
}

module.exports = {
  loginUser
}
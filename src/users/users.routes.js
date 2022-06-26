// ? Dependencies
const router = require('express').Router()
const userHttpHandler = require('./users.http')

// ? Import files
const config = require('../config')

// ? Rutas protegidas
const passport = require('passport')
require('../tools/auth')(passport)

/*
  //todo: get /users
  //todo: get /users/:id 
  todo: put /users/:id
  todo: delete /users/:id
  todo: get /users/me
*/

router.route('/')
  // .get(userHttpHandler.getAllUsers)
  .get(passport.authenticate('jwt', config.jwtSecret), userHttpHandler.getAllUsers)

router.route('/id')
  .get(passport.authenticate('jwt', config.jwtSecret), userHttpHandler.getUserById)

router.route('/me')
  .get(userHttpHandler.deleteUser)

router.route('/id')
  .delete(passport.authenticate('jwt', config.jwtSecret) ,userHttpHandler.deleteUser)

module.exports = {
  router
}
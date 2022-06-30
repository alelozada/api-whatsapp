// ? Dependencies
const router = require('express').Router()

// ? Rutas protegidas
const passport = require('passport')
require('../tools/auth')(passport)

// ? Import files
const userHttpHandler = require('./users.http')

/*
  //todo: get /users
  //todo: get /users/:id 
  todo: put /users/:id
  todo: delete /users/:id
  todo: get /users/me
*/

router.route('/')
  // .get(userHttpHandler.getAllUsers)
  .get(passport.authenticate('jwt', {session: false}), userHttpHandler.getAllUsers)

router.route('/:uuid')
  .get(passport.authenticate('jwt', {session: false}), userHttpHandler.getUserById)
  .put(userHttpHandler.editUser)
  .delete(userHttpHandler.deleteUser)

router.route('/me')
  .get(userHttpHandler.deleteUser)

router.route('/id')
  .delete(passport.authenticate('jwt', {session: false}) ,userHttpHandler.deleteUser)

module.exports = {
  router
}
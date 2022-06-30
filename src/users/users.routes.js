// ? Dependencies
const router = require('express').Router()

// ? Protected routes
const passport = require('passport')
require('../tools/auth')(passport)

// ? Import files
const userHttpHandler = require('./users.http')


//*---- R O U T E S ----*//

router.route('/')
  .get(passport.authenticate('jwt', {session: false}), userHttpHandler.getAllUsers)

router.route('/:uuid')
  .get(passport.authenticate('jwt', {session: false}), userHttpHandler.getUserById)
  .put(passport.authenticate('jwt', {session: false}), userHttpHandler.editUser)
  .delete(passport.authenticate('jwt', {session: false}), userHttpHandler.deleteUser)

router.route('/me')
  .get(passport.authenticate('jwt', {session: false}), userHttpHandler.getUserByEmail)

module.exports = {
  router
}
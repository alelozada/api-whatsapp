// ? Dependencies
const router = require('express').Router()

// ? Import files
const authHttpHandler = require('./auth.http')


//*---- R O U T E S ----*//

router.route('/login')
    .post(authHttpHandler.loginUser)

router.route('/signin')
    .post(authHttpHandler.registerUser)

module.exports = { router }
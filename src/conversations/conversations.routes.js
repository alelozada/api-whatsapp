// ? Dependencies
const router = require('express').Router()

// ? Protected routes
const passport = require('passport')
require('../tools/auth')(passport)

// ? Import files
const conversationsHttpHandler = require('./conversations.http')


//*---- R O U T E S ----*//

/*
  TODO: /conversations (GET, POST)
  ? - Ruta para ver todas la conversaciones del usuario
  ? - Ruta para crear una nueva conversación

  TODO: /conversations/:uuid (GET, PUT, DELETE)
  // ? - Ruta para ver una conversación del usuario
  ? - Ruta para editar una conversación del usuario
  ? - Ruta para elimiar una conversación del usuario
*/
router.route('/')
  .get(passport.authenticate('jwt', {session: false}), conversationsHttpHandler.getAllConversations)
  .post()

router.route('/:uuid')
  .get(conversationsHttpHandler.getConversationInfo)
  .put()
  .delete()

module.exports = { router }
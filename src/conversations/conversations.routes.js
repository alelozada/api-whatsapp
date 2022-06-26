// ? Dependencies
const router = require('express').Router()

// ? Export files
const conversationsHttpHandler = require('./conversations.http')

router.route('/:uuid')
  .get(conversationsHttpHandler.getConversationInfo)

module.exports = { router }
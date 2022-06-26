// ? Dependencies
const router = require('express').Router()

// ? Export files
const participantsHttpHandler = require('./participants.http')

router.route('/:uuid/participants')
  .get(participantsHttpHandler.getAllParticipants)

module.exports = { router }
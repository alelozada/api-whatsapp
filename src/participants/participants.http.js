// ? Import files
const { to } = require('../tools/to')
const participantsController = require('./participants.controllers')

// * ---- HTTP handlers ----

const getAllParticipants = async (req, res) => {
  const [data, err] = await to(participantsController.getAllParticipants(req.params.uuid))
  if(!err || data){
    res.status(200).json(data)
  } else {
    res.status(400).json({message: 'Server error'})
  }
}

module.exports = { getAllParticipants }
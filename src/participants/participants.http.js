// ? Import files
const { to } = require('../tools/to')
const participantsController = require('./participants.controllers')

// * ---- HTTP handlers ----

const getAllParticipants = async (req, res) => {
  const [data, err] = await to(participantsController.getAllParticipants(req.params.uuid))
  if(!err || data){
    console.log(data)
    res.status(200).json(data)
  } else {
    res.status(400).json({message: 'error, no se de que, pero es un error'})
  }
}

module.exports = { getAllParticipants }
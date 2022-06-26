// ? Import files
const { to } = require('../tools/to')
const conversationController = require('./conversations.controllers')

// * ---- HTTP handlers ----

const getConversationInfo = async (req, res) => {
  const [data, err] = await to(conversationController.getConversationInfo(req.params.uuid))
  if(!err || data){
    res.status(200).json(data)
  } else {
    res.status(400).json({message: 'Server error'})
  }
}

module.exports = { getConversationInfo }
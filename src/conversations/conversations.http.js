// ? Import files
const { to } = require('../tools/to')
const conversationController = require('./conversations.controllers')

//*---- H T T P   H A N D L E R S ----*//

const getAllConversations = async (req, res) => {
  console.log(req.user);
  const conversations = await conversationController.getAllConversations(req.user.id)
  res.status(200).json(conversations)
}

const getConversationInfo = async (req, res) => {
  const [data, err] = await to(conversationController.getConversationInfo(req.params.uuid))
  if(!err || data){
    res.status(200).json(data)
  } else {
    res.status(400).json({message: 'Server error'})
  }
}

module.exports = { 
  getConversationInfo,
  getAllConversations
}
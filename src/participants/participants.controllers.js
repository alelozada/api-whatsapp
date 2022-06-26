// ? Cargando los modelos
const participants = require('../database/models/init-models').initModels().participants

const getAllParticipants = async (conversation_id) => {
  const allParticipants = await participants.findAll({
    where: {
      conversation_id
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })

  return allParticipants
}

module.exports = { getAllParticipants }
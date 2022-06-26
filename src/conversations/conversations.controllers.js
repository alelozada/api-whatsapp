// ? Cargando los modelos
const models = require('../database/models/init-models').initModels()

const getConversationInfo = async (id) => {
  const conversation = await models.conversations.findOne({
    where: {
      id
    },
    include: [
      {
        model: models.participants,
        as: 'participants',
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        },
        include: [
          {
            model: models.users,
            as: 'user',
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"]
            }
          }
        ]
      }
    ]
  })

  return conversation
}

module.exports = { getConversationInfo }
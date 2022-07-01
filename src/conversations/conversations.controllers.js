// ? Cargando los modelos
const models = require('../database/models/init-models').initModels()


//*---- C O N T R O L L E R S ----*//

// todo: función para obtener todas las conversaciones de un usuario
const getAllConversations = async (id) => {

  // ? SELECT * FROM conversations
  const allConversations = await models.conversations.findAll({
    where: {
      created_by: id
    }
  })

  return allConversations
}

// ? función para obtener la información de una conversación
const getConversationInfo = async (id) => {
  const conversation = await models.conversations.findOne({
    where: {
      id
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"]
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

module.exports = { 
  getConversationInfo,
  getAllConversations
}
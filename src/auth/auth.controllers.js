// ? Import files
const userController = require('../users/users.controllers')
const crypto = require('../tools/crypto')
const { to } = require('../tools/to')

// ? Verificar las credenciales del usuario
const checkUsersCredential = async (email, password) => {
  const [user, err] = await to(userController.getUserByEmail(email))
  console.log(user)
  if (!err && user.dataValues) {
    return crypto.comparePassword(password, user.password)
  } else {
    return null
  }
}

module.exports = {
  checkUsersCredential
}

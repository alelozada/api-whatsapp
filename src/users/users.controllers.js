// ? Dependencies
const uuid = require('uuid')

// ? Import files
const crypto = require('../tools/crypto')

// ? Cargando los modelos
const users = require('../database/models/init-models').initModels().users


//*---- C O N T R O L L E R S ----*//

// ? función para registrar un usuario a la tabla users
const registerUser = async (data) => {
  const hashedPassword = crypto.hashPassword(data.password)
  const userId = uuid.v4()

  // ? SQL Query: INSERT INTO users (id, ...data, password) values (...)
  const newUser = await users.create({
    id: userId,
    ...data,
    password: hashedPassword
  })

  return {
    message: `User created succesfully with the id: ${userId}`,
    user: newUser.dataValues
  }
}

// ? función para obtener todos los usuarios de la tabla users
const getAllUsers = async () => {
  
  // ? SELECT * FROM users
  const allUsers = await users.findAll({
    attributes: {
      exclude: ["password"]
    }
  })

  return allUsers
}

// ? función para obtener un usuario por el id de la tabla users
const getUserById = async (id) => {

  // ? SELECT user FROM users WHERE id = id
  const user = await users.findByPk(id, {
    attributes: {
      exclude: ["password"]
    }
  })

  return user
}

// ? función para obtener un usuario por el email de la tabla users
const getUserByEmail = async (email) => {

  // ? SELECT user FROM users WHERE email = email
  const user = await users.findOne({
    where: {
      email
    }
  })

  return user
}

// ? función para eliminar a un usuario de la tabla users
const deleteUser = async (id) => {

  // ? DELETE FROM users WHERE id
  const user = await users.destroy({
      where: {
          id
      }
  })
  
  // ! La respuesta user: retorna 1 cuando encuentra un usuario 0 cuando no encuentra el usuario
  // todo: manejar la respuesta en user.http y mostrar la información del usuario.
  return {
      message: `User with id: ${id} deleted succesfully.`,
      user
  }
}

// ? función para editar a un usuario de la tabla users
const editUser = async (id, data) => {
  if(data.password || data.id || data.created_at) {
    return {message: "You can't modified this information"}
  }

  // ? UPDATE users SET data WHERE id = id
  const user = await users.update(data, {
      where: {
          id
      }
  })

  // ! La respuesta user: retorna 1 cuando encuentra un usuario 0 cuando no encuentra el usuario
  // todo: manejar la respuesta en user.http y mostrar la información del usuario.
  return {
      message: `User with id: ${id} eddited succesfully.`,
      user: user
  }
}

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  deleteUser,
  editUser
}
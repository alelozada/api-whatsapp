// ? Dependencies
const crypto = require('../tools/crypto')
const uuid = require('uuid')

// ? Cargando los modelos
const users = require('../database/models/init-models').initModels().users


// * ---- Controladores ----

// ?
const registerUser = async (data) => {
  const hashedPassword = crypto.hashPassword(data.password)
  const userId = uuid.v4()

  // ? SQL Query: INSERT INTO users (id, ...data, password) values (...)
  const newUser = await users.create({
    id: userId,
    ...data,
    password: hashedPassword
  })

  return{
    message: `User created succesfully with the id: ${userId}`,
    user: newUser
  }
}

// ?
const getAllUsers = async () => {
  
  // ? SELECT * FROM users
  const allUsers = await users.findAll({
    attributes: {
      exclude: ["password"]
    }
  })

  return allUsers
}

// ?
const getUserById = async (id) => {

  // ? SELECT user FROM users WHERE id = id
  const user = await users.findByPk(id, {
    attributes: {
      exclude: ["password"]
    }
  })

  return user
}

// ?
const getUserByEmail = async (email) => {

  // ? SELECT user FROM users WHERE id = id
  const user = await users.findOne({
    where: {
      email
    }
  })

  return user
}

// ?
const deleteUser = async (id) => {

  // ? DELETE FROM users where id
  const user = await users.destroy({
      where: {
          id
      }
  })
  
  return {
      message: `User with id: ${id} deleted succesfully.`,
      user
  }
}

// ?
const editUser = async (id, data) => {

  // ? UPDATE users SET data WHERE id
  const user = await users.update(data, {
      where: {
          id
      }
  })

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
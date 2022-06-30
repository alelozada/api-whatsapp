// ? Import files
const usersController = require('./users.controllers')


// * ---- HTTP handlers ----

const getAllUsers = async (req, res) => {
  const users = await usersController.getAllUsers()
  res.status(200).json(users)
}

const getUserById = async (req, res) => {
  const user = await usersController.getUserById(req.user.id)
  res.status(200).json(user)
}

const deleteUser = async (req, res) => {

  const data = await usersController.deleteUser(req.params.uuid)
  res.status(200).json(data)
}

// TODO: Una función para editar a un usuario.
const editUser = async (req, res) => {
  
  const user = await usersController.editUser(req.params.uuid, req.body)
  res.status(200).json(user)
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  editUser
}
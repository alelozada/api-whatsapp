// ? Import files
const usersController = require('./users.controllers')


//*---- H T T P   H  A N D L E R S ----*//

const getAllUsers = async (req, res) => {
  const users = await usersController.getAllUsers()
  res.status(200).json(users)
}

const getUserById = async (req, res) => {
  const user = await usersController.getUserById(req.user.id)
  res.status(200).json(user)
}

const getUserByEmail = async (req, res) => {
  const user = await usersController.getUserByEmail(req.user.email)
  res.status(200).json(user)
}

const deleteUser = async (req, res) => {
  const data = await usersController.deleteUser(req.params.uuid)
  res.status(200).json(data)
}

const editUser = async (req, res) => {
  const user = await usersController.editUser(req.params.uuid, req.body)
  res.status(200).json(user)
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  deleteUser,
  editUser
}
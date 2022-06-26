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

  const user = await usersController.deleteUser(req.user.id)
  res.status(200).json(user)
}

const editUser = async (req, res) => {

}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  editUser
}
// ? Import dependencies
const bcrypt = require("bcrypt")

// * Utilidad para encriptar contraseñas y verificar si las credenciales son correctas

// ? funcion para encriptar contraseña
const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10)
}

// ? funcion para comparar contraseñas para hacer el login
const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword
}
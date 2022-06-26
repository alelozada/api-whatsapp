// ? Dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// const rateLimit = require("express-rate-limit");

// ? Import files
const config = require('./config')

// ? Routers
const authRouter = require('./auth/auth.routes').router
const userRouter = require('./users/users.routes').router
// const conversationRouter = require('./conversations/conversations.routes').router


// * ---- Initial configuration ----

// ? Init express app
const app = express()

// ? Enable CORS
app.use(cors())

// ? Enable incoming JSON data
app.use(express.json())

// ? Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }))

// ? Morgan enviroment config
if (config.nodeEnv === "development") app.use(morgan("dev"))
else app.use(morgan("combined"))


// * ---- Endpoints ----

// ? users
// app.use('/api/v1/users', (req, res) => {
//   res.status(200).json({message: "OK!"})
// })

app.use('/api/v1/users', authRouter )
app.use('/api/v1/auth', authRouter )
// app.use('/api/v1/conversations', conversationRouter)

// ? listen function
app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
})

module.exports = { app }
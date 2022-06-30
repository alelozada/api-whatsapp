// ? Dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// const rateLimit = require("express-rate-limit"); // used only if you want limit the request to your API

// ? Import files
const config = require('./config')

// ? Routers
const authRouter = require('./auth/auth.routes').router
const userRouter = require('./users/users.routes').router
const conversationRouter = require('./conversations/conversations.routes').router
const participantsRouter = require('./participants/participants.routes').router


//*---- I N I T I A L   C O N F I G U R A T I O N ----*//

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


//*---- E N D P O I N T S ----*//

// ? auth
app.use('/api/v1/auth', authRouter )

// ? users
app.use('/api/v1/users', userRouter )

// ? conversations
app.use('/api/v1/conversations', conversationRouter)
app.use('/api/v1/conversations', participantsRouter)

// ? listen function
app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
})

module.exports = { app }
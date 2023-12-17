const path = require('path')

const express = require('express')
const app = express()

const {userRouter} = require('./src/routes/Users/userRoute')

app.use(express.json())
app.use(express.static('./public'))

app.use('/users', userRouter)

module.exports = app
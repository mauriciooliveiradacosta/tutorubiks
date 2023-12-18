require('dotenv').config()
const http = require('http')
const mongoose = require('mongoose')

const app = require('./app.js')

const server = http.createServer(app)

server.listen(process.env.PORT, async () => {
    await mongoose.connect(process.env.CONNECTION_STRING).then(() => {
        console.log("Connected to dabase")
    }).catch(err => {
        console.log(err)
        process.exit()
    })
    console.log(`listening on port ${process.env.PORT}`)
})
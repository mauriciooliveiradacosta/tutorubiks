require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static('./public'))

app.listen(process.env.PORT, () => {
    console.log(`listening in port ${process.env.PORT}`)
})
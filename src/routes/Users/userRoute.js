const express = require('express')
const router = express.Router()

const { getUsers,getUserFromId } = require('./userController.js')

router.get('/', getUsers)
router.get('/:id', getUserFromId)

module.exports = {
    userRouter: router
}
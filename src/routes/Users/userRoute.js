const express = require('express')
const router = express.Router()

const { getUsers,getUserFromId,createAUser } = require('./userController.js')

router.get('/', getUsers)
router.get('/:id', getUserFromId)
router.post('/', createAUser)

module.exports = {
    userRouter: router
}
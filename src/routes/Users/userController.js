const path = require('path')

const { getAllUsers,getUserById,createUser } = require(path.join(__dirname, '..', '..', 'models', 'userModel.js'))

async function getUsers(req,res){
    return res.status(200).json(await getAllUsers())
}
async function getUserFromId(req,res){
    const id = Number(req.params.id)

    const user = await getUserById(id)

    if(!user) return res.status(404).json({message: `could not find user with id of ${id}`})
    else return res.status(200).json(user)
}
async function createAUser(req,res){
    const body = req.body

    if(!body) return res.status(400).json({message: 'user not informed'})

    const user = await createUser(body)

    return res.status(201).json(user)
}

module.exports = {
    getUsers,
    getUserFromId,
    createAUser
}
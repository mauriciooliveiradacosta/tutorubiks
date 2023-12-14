const path = require('path')

const { getAllUsers,getUserById } = require(path.join(__dirname, '..', '..', 'models', 'userModel.js'))

function getUsers(req,res){
    return res.status(200).json(getAllUsers())
}
function getUserFromId(req,res){
    const id = Number(req.params.id)

    const user = getUserById(id)

    if(!user) return res.status(404).json({message: `could not find user with id of ${id}`})
    else return res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUserFromId
}
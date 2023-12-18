const userModel = require('./userSchema.js')

async function getAllUsers(){
    return await userModel.find({})
}
async function getUserById(userId){
    const user = await userModel.find({id: userId})
    return user? user: null
}
//need to create a better checking for when user already exists
async function createUser(user){
    if(!user.id || !user.password || !user.name){
        return null
    }
    await userModel.create({
        id: user.id,
        username: user.name,
        password: user.password
    })
    return await userModel.find({id:user.id, username: user.name})
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}
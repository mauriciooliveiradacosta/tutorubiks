const users = new Map()

const user = {
    id: 1,
    name: 'anna',
    gender: 'F'
}

users.set(user.id, user)

function getAllUsers(){
    const allUsers = Array.from(users.values()) || []
    return allUsers
}
function getUserById(id){
    if(users.has(id)) return users.get(id)
    else return null
}
//need to create a better checking for when user already exists
function createUser(user){
    if(!user.id || users.has(user.id)){
        return null
    }
    users.set(user.id, user)
    return users.get(user.id)
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}
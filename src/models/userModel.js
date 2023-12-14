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

module.exports = {
    getAllUsers,
    getUserById
}
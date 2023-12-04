const mongoose = require('mongoose')

const connect = async () => {
    try{
        const connection = mongoose.connect(process.env.CONNECTION_STRING)
        console.log('connected')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = {connect}
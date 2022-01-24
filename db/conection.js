const mongoose = require('mongoose')
module.exports.connection = async()=>{
        try {
            const db = await mongoose.connect('mongodb://localhost:27017/projects')
            console.log( 'conectado a ',db.connection.name);
        } catch (error) {
            console.log(error);
        }
}

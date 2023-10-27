const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/inotebook"

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, () => {
//         console.log("Connected to Mongo successfully")
//     })
// }

const connectToMongo = async () => {
    try {
        // mongoose.set('strictQuery', false)
        await mongoose.connect(mongoURI) 
        console.log('Connected to Mongo successfully')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectToMongo;

const mongoose = require('mongoose');
const config = require('config');

const mongoUri = config.get('mongoUri');

module.exports.connectDB = async() => {
    try {
        await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log('Connected to DB with success');
    } catch (error) {
        console.log("error is ", error);
    }
};
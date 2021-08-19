const User = require('../models/User');

module.exports.getUsers = async(query) => {
    return User.find() //verify from userController
}
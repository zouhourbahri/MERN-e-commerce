const userService = require("./userService")
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports.signUp = async(query) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(query.password, salt);
        query.password = hash
        let newUser = new User(query)
        return newUser.save();
        // await userService.addUsers(query)
    } catch (error) {
        throw error
    }
}
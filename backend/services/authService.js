const userService = require("./userService")
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const staticMessages = require("../staticMessages.json")
const config = require('config');
const secretOrKey = config.get('secretOrKey');
const jwt = require('jsonwebtoken');

module.exports.signUp = async(query) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(query.password, salt);
        query.password = hash
        let newUser = new User(query)
        return newUser.save();
        // await userService.addUsers(query)
    } catch (error) {
        console.log("error", error)
        throw error
    }
}

module.exports.signIn = async(query) => {
    try {
        let connectingUser = await userService.getUsers({ email: query.email })
        if (!connectingUser)
            throw new Error(staticMessages.emailDoesNotExist)
        const matched = await bcrypt.compare(query.password, connectingUser[0].password)
        if (!matched)
            throw new Error(staticMessages.passwordDoesNotMatch)
        let payload = {
            id: connectingUser[0]._id,
            firstName: connectingUser[0].firstName,
            lastName: connectingUser[0].lastName,
            email: connectingUser[0].email,
        }
        let token = await jwt.sign(payload, secretOrKey)
        return { token: `Bearer ${token}`, user: payload }
    } catch (error) {
        console.log("error", error)
        throw error
    }
}
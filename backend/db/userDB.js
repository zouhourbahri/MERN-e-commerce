const User = require('../models/User');

module.exports.getUsers = async(query) => {
    return User.find()
        .where(`${query.email? {email: query.email } : null}`)
}

module.exports.addUsers = async(query) => {
    return User.create(query)
}
const User = require('../models/User');

module.exports.getUsers = async(query) => {
    return User.find(
        query.email ? { email: query.email } : null,

    )
}
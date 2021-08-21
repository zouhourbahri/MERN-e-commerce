const User = require('../models/User');

module.exports.getUsers = async(query) => {
    return User.find(
            query.email && query.list == "all" ? { email: query.email } : null,
            query.email ? { email: query.email } : null,
        )
        // .where(`${query.email? {email: query.email } : null}`)
}

module.exports.addUsers = async(query) => {
    return User.create(query)
}
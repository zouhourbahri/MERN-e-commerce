const userDB = require("../db/userDB")

module.exports.getUsers = async(query) => {
    return userDB.getUsers(query)
}
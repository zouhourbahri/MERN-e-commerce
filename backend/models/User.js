const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
    roles: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Role',
    }],
    vehicule: {
        type: mongoose.Schema.ObjectId,
        ref: 'Vehicule',
    },
    products: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
    }],
    profilPicture: {
        type: String,
    },
    contrat: {
        type: String,
    },
    permis: {
        type: String,
    },
    adresse: {
        type: String,
    }
}, { timestamps: {} });

UserSchema.pre('save', async(user) => {
    const userDB = require("../db/userDB")
    const staticMessages = require("../staticMessages.json")
    if (user.email) {
        return new Promise((resolve, reject) => {
            userDB.getUsers({ email: user.email }).then(user => {
                reject(staticMessages.emailAlreadyExist)
            }).catch(err => {
                resolve(true)
            })
        })
    } else {
        return true
    }
})
module.exports = mongoose.model("user", UserSchema);
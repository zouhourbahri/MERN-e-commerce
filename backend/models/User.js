const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    firstName: {
        type: String,
        // required: true,
    },
    lastName: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    },
    phone: {
        type: String,
        // required: true
    },
    roles: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Role',
    }],
    profilPicture: {
        type: String,
    },
    contrat: {
        type: String,
        // required: true
    },
    permis: {
        type: String,
        // required: true
    },
    CreerLe: {
        type: Date,
        default: Date.now,
    },
    modifierLe: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("user", UserSchema);
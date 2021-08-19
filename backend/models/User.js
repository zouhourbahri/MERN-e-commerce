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

})
module.exports = mongoose.model("user", UserSchema);
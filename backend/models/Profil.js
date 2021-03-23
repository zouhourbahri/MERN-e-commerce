const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProfilSchema = new schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        requied: true,
    },
    interests: {
        type: [String],
    },

});

module.exports=mongoose.model("profil", ProfilSchema);
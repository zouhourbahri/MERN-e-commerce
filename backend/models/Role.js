const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RoleSchema = new schema({
    code: {
        type: String,
    },
    permissions: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Permission',
    }, ],
    users: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    }]
}, { timestamps: {} });

module.exports = mongoose.model("Role", RoleSchema);
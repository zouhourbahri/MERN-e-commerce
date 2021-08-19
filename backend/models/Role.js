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
}, { timestamps: {} });

module.exports = mongoose.model("Role", RoleSchema);
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RoleSchema = new schema({
    code: {
        type: String,
        required: true,
    },
    CreerLe: {
        type: Date,
        default: Date.now,
    },
    modifierLe: {
        type: Date,
        default: Date.now,
    },
    permissions: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Permission',
    }, ],
});

module.exports = mongoose.model("Role", RoleSchema);
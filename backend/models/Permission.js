const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PermissionSchema = new schema({
    code: {
        type: String,
        required: true,
    },
    // CreerLe: {
    //     type: Date,
    //     default: Date.now,
    // },
    // modifierLe: {
    //     type: Date,
    //     default: Date.now,
    // },
}, { timestamps: {} });

module.exports = mongoose.model("Permission", PermissionSchema);
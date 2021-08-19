const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PermissionSchema = new schema({
    code: {
        type: String,
        required: true,
    },
}, { timestamps: {} });

module.exports = mongoose.model("Permission", PermissionSchema);
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductSchema = new schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    productPictures: [
        { img: { type: String } }
    ],
    visitors: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    }]
}, { timestamps: {} });

module.exports = mongoose.model("product", ProductSchema);
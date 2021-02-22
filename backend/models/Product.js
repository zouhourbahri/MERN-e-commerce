const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductSchema = new schema ({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    lastUpdate: Date,
    productPictures: [
        { img: { type: String}}
    ],
    visitors: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    }]
});

module.exports = mongoose.model("product", ProductSchema);
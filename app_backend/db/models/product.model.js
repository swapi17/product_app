const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    quantity: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    costPrice: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
     sellingPrice: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

})

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product }
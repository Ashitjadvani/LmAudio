const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    proName: { type: String, required: true },
    proDetails: { type: String },
    proDescription: { type: String },
    placing: { type: String },
    imageUrl: { type: String, required: true },
    active: { type: Boolean, default: true }
}, {
    timestamps: true
})

const Product =mongoose.model('Products',ProductSchema)

module.exports =Product


const mongoose = require("mongoose")
const productItemSchema = mongoose.Schema({
  proId: { type: String },
  proName: { type: String },
  proDetails: { type: String },
  proDescription: { type: String },
  placing: { type: String },
  imageUrl: { type: String },
  qty: { type: Number },
  rate: { type: Number },
  total: { type: Number },
}, { timestamps: true })
const quotSchema = mongoose.Schema({
  quotNumber: { type: String },
  cstId: { type: String },
  cstName: { type: String },
  cstContact: { type: String },
  cstEmail: { type: String },
  cstAddress: { type: String },
  refName: { type: String },
  refContact: { type: String },
  productItem: [productItemSchema],
  totalAmount: { type: Number },
  totalQty: { type: Number },
  active:{type:Boolean,default:true}
}, {
  timestamps: true
})

const quotModel = mongoose.model("Quot", quotSchema)
module.exports = quotModel;
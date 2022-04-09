const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    cstName: { type: String, required: true },
    cstContact: { type: Number, required: true },
    cstEmail: { type: String, required: true },
    cstAddress:{ type: String, required: true },
    refName:{type:String},
    refContact: { type: Number, required: true },
    active:{type:Boolean,default:true}
}, {
    timestamps: true
})

const Customer =mongoose.model('Customer',CustomerSchema)

module.exports =Customer




// const mongoose = require('mongoose')

// const CustomerSchema= new mongoose.Schema({
//     cstName: { type: String, required: true },
//     cstContact: { type: Number, required: true },
//     cstEmail: { type: String, required: true },
//     cstAddress:{ type: String, required: true },
//     refName:{type:String},
//     active:{type:Boolean,default:true}
// },{
//     timestamps:true
// })
// const Customer=mongoose.model('Customer',CustomerSchema)
// module.exports=Customer
const quotModel = require("../models/quot")
//----------FindQuotation.................
const findQuot = async(req,res)=>{
  const quotList = await quotModel.find({})
  if (quotList.length>0) {
    res.send(quotList)
  } else {
    res.status(404).send("No Quot found")
  }
}
//--------------GetSingleProduct...........
const getSingleQuot = async(req,res)=>{
  const {id} = req.params

  const quotation = await quotModel.findById(id)
  if (quotation) {
    res.send(quotation)
  } else {
    res.status(500).send("Not successfull..")
  }
}
//--------------EditQuot...................
const editQuot=async(req,res)=>{
  const {id} = req.params
  const {quotNumber,cstId,cstName,cstContact,cstEmail,
    cstAddress,refName,refContact,productItem,totalAmount,totalQty}= req.body

    const quotation = await quotModel.findByIdAndUpdate(id,{quotNumber,cstId,cstName,cstContact,cstEmail,
      cstAddress,refName,refContact,productItem,totalAmount,totalQty})
    if (quotation) 
    {
      res.send("Successfull...")
    } else {
      res.status(500).send("Not Successfull")
    }
    
}
//--------------CreateQuot..................
const createQuot=async(req,res)=>{
  const {quotNumber,cstId,cstName,cstContact,cstEmail,
        cstAddress,refName,refContact,productItem,totalAmount,totalQty}= req.body
  const addQuot = await quotModel.create({
    quotNumber,cstId,cstName,cstContact,cstEmail,
        cstAddress,refName,refContact,productItem,totalAmount,totalQty
  })
  if (addQuot) {
    res.send(addQuot)
  } else {
      res.status(500).send("Unsuccessfull")
  }
      
}
//-------------DeleteQuot.................
const deleteQuot=async(req,res)=>{
  const {id} = req.params
  const delQuot = await quotModel.findByIdAndDelete(id)
  if (delQuot) {
    res.send(delQuot)
  } else {
    res.status(500).send("Unsuccessfull")
  }

}

//-------------EditField...................
const editField =async(req,res)=>{
  const documentId=req.params.id
  const field= req.query.field
  const value= req.query.value

  const quotation = await quotModel.updateOne({
    id:documentId,
    [field]:value
  })
  if (quotation) {
    res.send("Successfull")
  } else {
    res.status(500).send("Not Successfull")
  }
}
// ------------Deletefield................
const deleteField =async(req,res)=>{
  const documentId=req.body.id
  const field = req.query.field

  const quotation= await quotModel.updateOne({
    id:documentId
  },{
    $unset:{
      [field]:""
    }
  }) 
  if (quotation) {
    res.send("successfull")
  } else {
    res.status(500).send("Not Successfull")
  }
}
//-------------EditNestedField............
const editNestedField=async(req,res)=>{
  const documentId = req.params.id;
  const field =req.query.field;
  const subField =req.query.subField;
  const value = req.query.value;

  const quotation =await quotModel.findById(documentId);

  quotation[field][subField]=value;

  const update =await quotation.save();

  if (update) {
    res.send("successfull");
  } else {
    res.status(500).send("Not Successfull")
  }
}
//-------------EditNestedArray............
const editNestedArray = async (req,res)=>{
  const arrayId =req.params.arrayId;

  const {value}=req.body;

  const quotation= await quotModel.updateOne({
    "productItem.id":arrayId,
  },{
    $set:{
      "productItem.$.proName":value,
    }
  });
  if (quotation) {
    res.send("successfull")
  } else {
    res.status(500).send("Not Successful")  
  }
}
//-------------DeleteNestedArray..........
const deleteNestedArray =async (req,res)=>{
  const arrayId = req.params.arrayId;

  const quotation = await quotModel.updateOne(
    {
      "productItem.id":arrayId,
  },
  {
    $pull:{
      productItem:{_id:arrayId},
    }
  }
  )
  if (quotation) {
    res.send("Successfull")
  } else {
    res.status(500).send("Not Successfull")
  }
}
module.exports={
  findQuot,createQuot,
  editField,deleteField,
  editNestedField,editNestedArray,
  deleteNestedArray,editQuot,
  getSingleQuot,deleteQuot
}
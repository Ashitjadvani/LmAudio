const Quot =require('../models/quot')

exports.getQuot=()=>{
    return Quot.find()
}

exports.addQuot=(quotNumber,cstId,cstName,cstContact,cstEmail,cstAddress,refName,refContact,productItem)=>{
    const quot =new Quot()

    quot.quotNumber=quotNumber
    quot.cstId=cstId
    quot.cstName=cstName
    quot.cstContact=cstContact
    quot.cstEmail=cstEmail
    quot.cstAddress=cstAddress
    quot.refName=refName
    quot.refContact=refContact
    quot.productItem=productItem
    return quot.save()
  
}
exports.getSingleQuot=(id)=>{
    return Quot.findById(id)
    
}

exports.updateQuot=(id,quotNumber,cstId,cstName,cstContact,cstEmail,cstAddress,refName,refContact,productItem)=>{
    return Quot.findByIdAndUpdate(id,quotNumber,cstId,cstName,cstContact,cstEmail,cstAddress,refName,refContact,productItem)
}

exports.deleteQuot=(id)=>{
return Quot.findByIdAndDelete(id)
}
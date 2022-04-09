exports.addQuotValidators=(req,res,next)=>{
    const{quotNumber,cstId,cstName,cstContact,cstEmail,cstAddress,refName,refContact,productItem}=req.body
    let =errors={}

    if(quotNumber==='') errors.quotNumber='Quotation number can not be blank'
    if(cstId==='')error.cstId='cstid can not be blank'
    if(cstName==='')error.cstName='cstName can not be blank'
    if(cstContact==='')error.cstContact='cstContact can not be blank'
    if(cstEmail==='')error.cstEmail='cstEmail can not be blank'
    if(cstAddress==='')error.cstAddress='cstAddress can not be blank'
    if(refName==='')error.refName='refName can not be blank'
    if(refContact==='')error.refContact='refContact can not be blank'
    if(productItem==='')error.productItem='productItem can not be blank'

    if(Object.keys(errors).length===0){
        next()
    }else{
        res.status(400).json(errors)
    }
}
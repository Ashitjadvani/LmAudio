exports.addCustomerValidator=(req,res,next)=>{
    const { cstName, cstContact, cstEmail, cstAddress, refName, refContact } = req.body
let errors={}

if(cstName === '') errors.cstName='Customer name can not be blank'
if(cstContact === '') errors.cstContact='Contact can not be blank'
if(cstEmail === '') errors.cstEmail='Email can not be blank'
if(cstAddress=== '') errors.cstAddress='Address can not be blank'
if(refName === '') errors.refName='Refarance name can not be blank'
if(refContact === '') errors.refContact='Refrance Contact can not be blank'

if (Object.keys(errors).length === 0) {
    next()
  } else {
    res.status(400).json(errors)
  }
}
const Customer =require('../models/customer')

exports.getCustomers=()=>{
    return Customer.find()
}

exports.addCustomer = (cstName, cstContact, cstEmail, cstAddress, refName,refContact) => {

    const customer = new Customer()

    customer.cstName=cstName
    customer.cstContact=cstContact
    customer.cstEmail=cstEmail
    customer.cstAddress =cstAddress
    customer.refName =refName
    customer.refContact=refContact
    return customer.save()
}

exports.getSingleCustomer=(id)=>{
    return Customer.findById(id)
}
exports.updateCustomer=(id,cstName, cstContact, cstEmail, cstAddress, refName,refContact)=>{
    return Customer.findOneAndUpdate(id,cstName, cstContact, cstEmail, cstAddress, refName,refContact)
    console.log(id,cstName, cstContact, cstEmail, cstAddress, refName,refContact)
}
exports.deleteCustomer=(id)=>{
    return Customer.findByIdAndDelete(id)
}
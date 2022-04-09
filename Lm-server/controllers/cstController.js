const cstServices = require('../services/cstServices')

exports.getCustomers = (req, res) => {
  cstServices.getCustomers()
    .then((customer) => res.json(customer))
    .catch(() => res.status(500).json({ msg: 'Something went wrong' }))
}

exports.getSingleCustomer = (req, res) => {
  const { id } = req.params

  cstServices.getSingleCustomer(id)
    .then((customer) => res.json(customer))
    .catch(() => res.status(404).json({ msg: 'Customer not found' }))
}

exports.addCustomer = (req, res) => {
  const { cstName, cstContact, cstEmail, cstAddress, refName, refContact } = req.body

  if (!!cstName && cstName !== '') {
    cstServices.addCustomer(cstName, cstContact, cstEmail, cstAddress, refName, refContact)
      .then((newCustomer) => res.json(newCustomer))
      .catch(() => res.status(500).json({ msg: 'Something went wrong' }))
  } else {
    res.send('Customer name can not be blank.')
  }
}

exports.deleteCustomer = (req, res) => {
  const { id } = req.params

  cstServices.deleteCustomer(id)
    .then(() => res.json({}))
    .catch(() => res.status(404).json({
      msg: 'Customer not found.'
    }))
}

exports.updateCustomer=(req,res,next)=>{
  const {id} =req.params
  const { cstName, cstContact, cstEmail, cstAddress, refName, refContact } = req.body

  cstServices.updateCustomer(id,{cstName, cstContact, cstEmail, cstAddress, refName, refContact})
  .then(()=>res.json({
    msg:"Customer updated successfully..."
  })) 
  .catch(()=>req.status(404).json({
    msg:"Customer not found."
  }))
  // console.log(id,{cstName, cstContact, cstEmail, cstAddress, refName, refContact})
}
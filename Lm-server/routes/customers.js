const express = require('express')
const router = express.Router()

const authenticate=require('../middleware/authentication')
const cstController= require('../controllers/cstController')
const cstValidators  = require('../controllers/Validaators/cstValidators')

router.use(authenticate)

router.get('/',cstController.getCustomers)

router.get('/:id',cstController.getSingleCustomer)

router.post('/',[
    cstValidators.addCustomerValidator,
    cstController.addCustomer
])

router.delete('/:id',cstController.deleteCustomer)

router.put('/:id',cstController.updateCustomer)

module.exports =router
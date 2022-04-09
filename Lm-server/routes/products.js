const express = require('express')
const router = express.Router()

const authenticate = require('../middleware/authentication')
const upload = require('../middleware/uploads')

const proController = require('../controllers/ProController')
const proValidators = require('../controllers/Validaators/proValidators')

router.use(authenticate)

router.get('/', proController.getProducts)

router.get('/:id', proController.getSingleProduct )

router.post('/upload', [
  upload.single('image'),
  proController.uploadFile
])

router.post('/', [
  proValidators.addProductValidator,
  proController.addProduct

])

router.delete('/:id', proController.deleteProduct)

router.put('/:id', proController.updateProduct)

module.exports = router
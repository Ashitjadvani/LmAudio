const express = require('express')
const router = express.Router();

const UsersController = require('../controllers/userController')
const UsersValidator = require('../controllers/Validaators/userValidators')

router.post('/login', [
  UsersValidator.loginValidator,
  UsersController.login
])

router.post('/register', [
  UsersValidator.registerValidator,
  UsersController.register
])

module.exports = router
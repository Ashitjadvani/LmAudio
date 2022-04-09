const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require("dotenv/config")

const cors = require('./middleware/cors')

const productsRouter = require('./routes/products')
const customerRouter= require('./routes/customers')
const quotRouter=require('./routes/quots')
const usersRouter = require('./routes/users')

mongoose.connect(
  process.env.CONNECTION_URL,
  { useNewUrlParser: true,
  useUnifiedTopology:true },
  (err) => {
    if (!err) {
      console.log('DB Connected')
    }
  }
);

const app = express()
app.use(express.static('public'))

app.use(logger('dev'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))
app.use(cors)

app.use('/products', productsRouter)
app.use('/customer',customerRouter)
app.use('/', usersRouter)
app.use('/quotation',quotRouter)

module.exports =app;

//Step to start mongo db server
//set env variable path to the bin directory of mongodb installation
//Run the command: mongod --dbpath c:\data\db --port 27018
//Connect to the mongo db server: mongo --host localhost:27018
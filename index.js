const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

const CategoryRouter = require ('./API/category/router')

const port = process.env.SERVER_PORT

//mongoose.connect(process.env.MONGO_URL)
//.then(() => console.log("Db connected"))
//.catch((err)=> console.log("Something went wrong"))

//const MONGO_URL = process.env.MONGO_URL;

//mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  //.then(() => {
    //console.log('Connected to MongoDB Atlas');
  //})
  //.catch((error) => {
    //console.error('Error connecting to MongoDB Atlas:', error.message);
  //});

  
app.use (express.json())
app.use ('/api', CategoryRouter)
app .use('/api', require('./API/users/router'))
app.use('/api', require('./API/products/router'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//Require dependencies
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const app = express()

//Require routes
const manga = require('./routes/manga')

// Use of Middlewares
app.use(morgan('dev'))
.use(helmet())


// Connect to database
mongoose.connect('mongodb://192.168.1.47:27017/photo-challenge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err) => {
  console.log(err);
  console.log('Connected to database ✔');
})

app.get('/', (req, res) => {
  res.json({
    message : 'Welcome to the mongo API !'
  })
})

app.use('/manga', manga)



module.exports = app
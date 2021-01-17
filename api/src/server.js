
//Require dependencies
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const app = express()

//Require routes
const manga = require('./routes/manga')
const category = require('./routes/categories')

// Use of Middlewares
app.use(morgan('dev'))
.use(helmet())
.use(express.json())


// Connect to database
mongoose.connect('mongodb://localhost:27017/mango', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err) => {
  console.log('Connected to database ✔');
})

app.get('/', (req, res) => {
  res.json({
    message : 'Welcome to the mongo API !'
  })
})

app.use('/manga', manga)
app.use('/category', category)

module.exports = app
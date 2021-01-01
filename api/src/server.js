const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()

app.use(morgan('dev'))
.use(helmet())

app.get('/', (req, res) => {

  res.json({
    message : 'Welcome to the mongo API !'
  })

})

app.get('/api', (req, res) => {

  res.json({
    message : 'Welcome to the mongo API !'
  })

})

module.exports = app
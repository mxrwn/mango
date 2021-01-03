// Require dependencies
const router = require('express').Router()

// Require Models
const Manga = require('./../models/Manga')


router.get('/', (req, res) => {
  Manga.find({}, (err, doc) => {
    if(err){
      res.json({
        message: err
      })
    }else{
    res.json({
      message : doc
    })
  }
  })
})

router.post('/', (req, res) => {
  res.json({
    message : 'POST'
  })
})


router.put('/', (req, res) => {
  res.json({
    message : 'PUT'
  })
})

router.delete('/', (req, res) => {
  res.json({
    message : 'DELETE'
  })
})

module.exports = router
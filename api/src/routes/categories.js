const router = require('express').Router()
const Categories = require('./../models/Category')
const Manga = require('./../models/Manga')
router.get('/', (req, res) => {
  Categories.find({}, (err, doc) => {
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
  if (req.body){
    req.body.scantrad = false
    const data = new Categories(req.body)
    data.save()
    res.statusCode = 200
    res.json({
      message : 'POSTED'
    })
  }else{
    res.statusCode = 401
    res.json({
      message : 'NOTHING SENDED'
    })
  }
})


router.put('/', (req, res) => {
  Categories.updateOne({id : req.body._id}, req.body, (err, doc) => {
    if(err) return
    res.json({
      message : 'UPDATED'
    }
    )
  })
})

router.delete('/', (req, res) => {
  Manga.deleteMany({category : req.body._id}, (err) => {
    Categories.deleteOne({id : req.body._id}, (err) => {
      if(err) return
      res.json({
        message : 'DELETED'
      })
    })
  })
  
})

module.exports = router
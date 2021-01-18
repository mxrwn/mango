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
  if ( req.body.title, req.body.url, req.body.image, req.body.total, req.body.category){req.body.scantrad = false
    const data = new Manga(req.body)
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
  Manga.updateOne({id : req.body._id}, req.body, (err, doc) => {
    if(err) {
      
    }else{
      res.json({
        message : 'UPDATED'
      })
    }
  })
})

router.delete('/', (req, res) => {
  Manga.deleteOne({id : req.body._id}, (err) => {
    if(err) {
      res.sendStatus(401)
    }else{
      res.json({
        message : 'DELETED'
      })
    }
    
  })
})

module.exports = router
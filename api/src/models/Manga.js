const mongoose = require('mongoose')
const {Schema} = mongoose

const MangaSchema = new Schema({
  title: String,
  image: String,
  total: Number,
  url: String,
  scantrad : Boolean
})

const Manga = mongoose.model('manga', MangaSchema)

module.exports = Manga
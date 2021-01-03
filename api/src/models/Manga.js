const mongoose = require('mongoose')
const {Schema} = mongoose

const MangaSchema = new Schema({
  title: String,
  image: String,
  uri: String
})

const Manga = mongoose.model('manga', MangaSchema)

module.exports = Manga
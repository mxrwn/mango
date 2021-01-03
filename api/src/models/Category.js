const mongoose = require('mongoose')
const {Schema} = mongoose

const CategorySchema = new Schema({
  related_id: String,
  type: String,
})

const Category = mongoose.model('category', CategorySchema)

module.exports = Category
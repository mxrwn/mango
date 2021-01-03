const mongoose = require('mongoose')
const {Schema} = mongoose

const CategorySchema = new Schema({
  type: String,
})

const Category = mongoose.model('category', CategorySchema)

module.exports = Category
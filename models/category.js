const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'name must be provided'],
  },

  subcategory :[{
    type: Schema.Types.ObjectId,
    required:[true,'sub category must required'],
    ref: "subcategory"
}]
})

module.exports = mongoose.model('Category', CategorySchema)
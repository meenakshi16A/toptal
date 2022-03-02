const mongoose = require('mongoose')

const typesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'types name must be provided'],
  },

 
})

module.exports = mongoose.model('types', typesSchema)

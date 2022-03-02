const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const JobtittleSchema = new Schema({
    category: {
    type: String,
    required: [true, 'category must be provided'],
  },

  keywords :{
    type: Array,
    required: [true, 'keywords must be provided'],
}
})

module.exports = mongoose.model('Jobtittle', JobtittleSchema)
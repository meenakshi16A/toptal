const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const kpisSchema = new Schema({
  name: {
    type: String,
    required: [true, 'kpis name must be provided'],
  },

  subkpis :[{
    type: Schema.Types.ObjectId,
    required:[true,'sub kpis must required'],
    ref: "subkpis"
}]
})

module.exports = mongoose.model('kpis', kpisSchema)
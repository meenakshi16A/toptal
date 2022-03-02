const mongoose = require('mongoose')



var Schema = mongoose.Schema;

const projectSchema = new Schema({
  roles :[{
    type: Schema.Types.ObjectId,
    required:[true,'roles must required'],
    ref: "roles"
}],
types :[{
  type: Schema.Types.ObjectId,
  required:[true,'types must required'],
  ref: "types"
}],
 tid:{
  type: String,
  required:[true,'tid must required']
},
kpis :[{
  type: Array,
  required:[true,'Kpis must required'],
}]
})

module.exports = mongoose.model('Project', projectSchema)

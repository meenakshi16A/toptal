const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'roles name must be provided'],
  },

 
})

module.exports = mongoose.model('roles', rolesSchema)

const mongoose = require('mongoose')

const professionalsneedSchema =new mongoose.Schema(
    {
        name:{
        type: String,
        required: [true, 'professionalsneed name must be provided']
        },

    })

module.exports =mongoose.model('professionalsneed',professionalsneedSchema)
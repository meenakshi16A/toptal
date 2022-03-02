const mongoose = require('mongoose')
const SubkpisSchema =new mongoose.Schema(
    {
        name:{
        type: String,
             required: [true, 'sub kpis name must be provided']
        },

    })

module.exports =mongoose.model('subkpis',SubkpisSchema)
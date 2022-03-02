const mongoose = require('mongoose')
const Schema =mongoose.Schema;
const professionalsSchema =new mongoose.Schema(
    {
        name:{
        type: String,
             required: [true, 'professionals name must be provided']
        },
        professionalsneed :[{
            type: Schema.Types.ObjectId,
            required:[true,'professionalsneed must required'],
            ref: "professionalsneed"
        }]

    })

module.exports =mongoose.model('professional',professionalsSchema)
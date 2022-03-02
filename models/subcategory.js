const mongoose = require('mongoose')
const SubcategorySchema =new mongoose.Schema(
    {
        name:{
        type: String,
             required: [true, 'name must be provided']
        },

    })

module.exports =mongoose.model('subcategory',SubcategorySchema)
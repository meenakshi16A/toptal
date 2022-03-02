const express = require('express')
const typesrouter = express.Router()

const {
    getAllTypes,
} = require('../controllers/types')

typesrouter.route('/show_all_types').get(getAllTypes)

module.exports = typesrouter
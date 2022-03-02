const express = require('express')
const professioanlsneedrouter = express.Router()

const {
  getAllprofessionalneeds
} = require('../controllers/professioanlsneed')

professioanlsneedrouter.route('/show_all_professioanlsneed').get(getAllprofessionalneeds)


module.exports = professioanlsneedrouter

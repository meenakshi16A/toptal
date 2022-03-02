const express = require('express')
const rolerouter = express.Router()

const {
  getAllRoles,
} = require('../controllers/roles')

rolerouter.route('/show_all_roles').get(getAllRoles)

module.exports = rolerouter

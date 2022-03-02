const express = require('express')
const kpisrouter = express.Router()

const {
  getAllKpis,
  postGoToProjectDetails
} = require('../controllers/kpis')

kpisrouter.route('/show_all_kpis').get(getAllKpis)
kpisrouter.route('/project_details').post(postGoToProjectDetails)

module.exports = kpisrouter

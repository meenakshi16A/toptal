const express = require('express')
const router = express.Router()

const {
  addRolesToProject,
  addTypesToProject,
  allProjects,
  addKpisProject,
  getAllSkills,
  changeSkills,
  allDetials
} = require('../controllers/projects')

router.route('/all_projects').get(allProjects)
router.route('/add_roles_to_project').post(addRolesToProject)
router.route('/add_types_to_project/:id/:tid').patch(addTypesToProject)
router.route('/add_kpis_to_project/:id/:tid').patch(addKpisProject)
router.route('/get-skills').get(getAllSkills)
router.route('/change-Skills').get(changeSkills)
router.route('/all-Detials').get(allDetials)



module.exports = router

const Roles = require('../models/roles');
const jobtitle = require('../models/jobtitle');


const getAllRoles = async (req, res) => {
  const options = await Roles.find({}, {_id:0,name:1});

  res.status(200).json({ questions:"What role would you like to have the professional fill",identifier:"kpis_roles_professioanl_fill",options });
};


module.exports = {
  getAllRoles
};

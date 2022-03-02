const professionalneeds = require('../models/professionalneeds');
const professional = require('../models/professional');


const getAllprofessionalneeds = async (req, res) => {
  const options = await professional.find({ }).populate('professionalsneed');

  res.status(200).json({ Questions:"Professional details",options });
};


module.exports = {
  getAllprofessionalneeds
};

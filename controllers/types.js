const Types = require('../models/types');


const getAllTypes = async (req, res) => {
  const options = await Types.find({ });

  res.status(200).json({ Questions:"What Types of Project you are hiring for?",options });
};


module.exports = {
    getAllTypes
};

const kpis = require('../models/kpis');
const Subkpis = require('../models/Subkpis');


const getAllKpis = async (req, res) => {
  const options = await kpis.find({}).populate("subkpis");

  res.status(200).json({ Questions:"Please select the KPIS that you want that person to fulfill",options });
};

const postGoToProjectDetails = async(req,res) =>{
   res.status(200).json("Check Call Function");
};



module.exports = {
  getAllKpis,
  postGoToProjectDetails
};

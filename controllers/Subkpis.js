const Subkpis = require('../models/Subkpis');


const getAllKpis = async (req, res) => {
  const Subkpis = await Subkpis.find({ });

  res.status(200).json({ Subkpis });
};


module.exports = {
  getAllKpis
};

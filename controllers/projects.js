const Project = require('../models/projects');
const asyncwapper=require('../middleware/async')
const Roles = require('../models/roles');
const Category = require('../models/category');
const SubCategory = require('../models/subcategory');
const type = require('../models/types');
const pro = require('../models/professional');



const addRolesToProject = asyncwapper( async (req, res) => {
  const Projects = await Project.create(req.body);

  res.status(200).json({ Projects });
})
const allProjects = asyncwapper( async (req, res) => {
  const Projects = await Project.find({});

  res.status(200).json({ Projects });
})
const addTypesToProject = asyncwapper( async (req, res) => {


  const projectID=req.params.id;
   const tID=req.params.tid;
   const Projects = await Project.findOneAndUpdate({_id:projectID,tid:tID},req.body,{
    new:true,
    runValidators:true
});
  if(!Projects)
  {
      res.status(404).json({ msg:`Project id is not found` })
  }
  res.status(201).json({ Projects })

})

const addKpisProject = asyncwapper( async (req, res) => {
  const projectID=req.params.id;
  const tID=req.params.tid;
   const Projects = await Project.findOneAndUpdate({_id:projectID,tid:tID},req.body,{
     new:true,
     runValidators:true
   });
   if(!Projects)
   {
       res.status(404).json({ msg:`Project id is not found` })
   }
  res.status(201).json({ Projects })
})

const getAllSkills = asyncwapper (async (req, res) => {
   const options = await Category.find({}).populate('subcategory')
   res.status(201).json({Questions:'Skills', options })
})

const changeSkills = asyncwapper (async (req, res) => {
  const Cat = await Category.find({})
  const subCat = await SubCategory.find({})
  const options = [{
    Catt:Cat,
    subCatt:subCat,
  }]

  res.status(201).json({Questions:'change skils category', options })
})

const allDetials =asyncwapper (async (req, res) => {
  const role=await Roles.find({}, {_id:0,name:1});
  const Cat = await Category.find({}).populate('subcategory')
  const typee = await type.find({})
  const profes = await pro.find({}).populate('professionalsneed')


  const kpis = [{
    questions:"What role would you like to have the professional fill",
    identifier:"kpis_roles_professioanl_fill",
    options:role,
  },
  {
    kpis:[{
      Catt : Cat,
    }]
  },
  {
    types:typee,
  },
    {
      professionals:profes,
    },
    {
    skills:[{
      Catt : Cat,
    }]
  }

]

  res.status(201).json({ kpis })
})



module.exports = {
  addRolesToProject,
  addTypesToProject,
  allProjects,
  addKpisProject,
  getAllSkills,
  changeSkills,
  allDetials
};

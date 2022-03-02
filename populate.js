require('dotenv').config()

const connectDB = require('./db/connect')

// Use Models
const projects = require('./models/projects')
const roles = require('./models/roles')
const Types = require('./models/types')
const kpis = require('./models/kpis')
const subkpis = require('./models/Subkpis')
const professionalneeds = require('./models/professionalneeds')
const professional= require('./models/professional')
const Subcategory= require('./models/subcategory')
const Category= require('./models/category')
const jobtitlee= require('./models/jobtitle')

// JSON Store Data 
const jsonroles = require('./data/roles.json')
const jsontypes = require('./data/types.json')
const jsonkpis = require('./data/kpis.json')
const jsonsubkpis = require('./data/subkpis.json')
const professionalneedsjson = require('./data/professionalneeds.json')
const professionaljson = require('./data/professionals.json')
const SubcategoryJson = require('./data/Subcategory.json')
const CategoryJson = require('./data/Category.json')
const jobtitle = require('./data/jobtitle.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await jobtitlee.deleteMany()
    await jobtitlee.create(jobtitle)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()

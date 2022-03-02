require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const projectsRouter = require('./routes/projects');
const rolesRouter = require('./routes/roles');
const typesRouter = require('./routes/types');
const kpisrouter = require('./routes/kpis');
const professioanlsneedrouter = require('./routes/professionals');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/projects', projectsRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/types', typesRouter);
app.use('/api/v1/kpis', kpisrouter);
app.use('/api/v1/professioanlsneed', professioanlsneedrouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

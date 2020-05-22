require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mockgoose = require('mockgoose');
const cors = require('cors');
const routes = require('./src/routes/routes');

const port = process.env.PORT || 8080;
const secret = process.env.SECRET;
const dbUri = process.env.MONGODB_URI;
const nodeEnv = process.env.NODE_ENV || 'dev';

let server;

const checkPrerequisites = () => {
  let returnValue = true;
  if (!secret) {
    console.error('SECRET is undefined, check environement variables');
    returnValue = false;
  } else if (!dbUri) {
    console.error('DATABASE is undefined, check environement variables');
    returnValue = false;
  }
  return returnValue;
};

const checkMongooseConnection = (connection) => {
  const db = connection.connection;
  db.on('error', (err) => {
    throw new Error(err);
  });
  db.once('open', () => {
    console.log(`connected to database at ${dbUri}`);
  });
};

const connectMongodb = () => {
  if (nodeEnv === 'test') {
    console.log('starting test mode');
    const mock = new mockgoose.Mockgoose(mongoose);
    mock.prepareStorage().then(() => {
      mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
    });
  } else {
    mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
  checkMongooseConnection(mongoose);
};

const connectExpress = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(
    cors({
      credentials: true,
    })
  );
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  routes.forEach((el) => {
    const routePrefix = `/api/${el[0]}`;
    const route = el[1];
    app.use(routePrefix, route);
  });
  app.use('/thumb', express.static(`${__dirname}/public`));
  server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

const runServer = () => {
  if (!checkPrerequisites())
    throw new Error('Prerequisites check unsuccessful');
  connectMongodb();
  connectExpress();
};

const closeServer = () => {
  if (server) {
    server.close();
  }
};

module.exports = { runServer, closeServer };

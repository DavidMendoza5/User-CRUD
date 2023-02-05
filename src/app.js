const express = require('express');
const cors = require('cors');
const createConnection = require('./loaders/postgres.loader');
const routes = require('./routes/index');

const app = express();
createConnection();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api',routes);

module.exports = app;
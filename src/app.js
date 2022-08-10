const express = require('express');
const createConnection = require('./loaders/postgres.loader');
const routes = require('./routes/index');

const app = express();
createConnection();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api',routes);

module.exports = app;
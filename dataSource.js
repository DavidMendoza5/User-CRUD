const { DataSource } = require('typeorm');
require('dotenv').config();

const dataSource = new DataSource({
  "type": process.env.DATABASE_TYPE,
  "host": process.env.DATABASE_HOST,
  "port": process.env.DATABASE_PORT,
  "username": process.env.DATABASE_USERNAME,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "logging": true,
  "entities": ["src/schemas/**/*.schema.js"],
  "synchronize": true
});

module.exports = dataSource;
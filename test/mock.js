const generateToken = require('../src/utils/jwt');

const data = {
  "email": "user@gmail.com",
  "password": "12345"
}

const TOKEN = generateToken(data);

module.exports = TOKEN;
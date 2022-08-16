const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXP,
  });
}

module.exports = generateToken;
require('dotenv').config();

const bcrypt = require('bcryptjs');

const encryptPassword = async (password) => {
  const rounds = process.env.BCRYPT_HASH_ROUND;
  return bcrypt.hash(password, Number(rounds));
}

module.exports = encryptPassword;
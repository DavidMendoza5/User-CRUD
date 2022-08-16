const bcrypt = require('bcryptjs');

const validateCredentials = async (password, hash) => {
  return bcrypt.compare(password, hash);
}

module.exports = validateCredentials;
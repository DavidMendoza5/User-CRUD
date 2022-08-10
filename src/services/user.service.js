const repository = require('../repository/abstract.repository');

const createUserService = async (schema, data) => {
  try {
    const response = await repository.createInDB(schema, data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createUserService,
}
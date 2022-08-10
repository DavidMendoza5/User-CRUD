const repository = require('../repository/abstract.repository');

const createUserService = async (schema, data) => {
  try {
    const response = await repository.createInDB(schema, data);

    const newUser = {
      id: response.id,
      username: response.username,
      name: response.name,
    }

    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

const getUserByIdService = async (schema, id) => {
  try {
    const response = await repository.getById(schema, id);
    
    const data = {
      id: response.id,
      username: response.username,
      name: response.name,
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const getUsersService = async (schema) => {
  try {
    const response = await repository.get(schema);
    
    const data = response.map((element) => {
      const newData = {
          id: element.id,
          username: element.username,
          name: element.name,
        }
        return newData;
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createUserService,
  getUserByIdService,
  getUsersService
}
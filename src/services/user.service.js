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

    if(!response) return {error: 'No existe el usuario', code: 404}
    
    const data = {
      id: response.id,
      username: response.username,
      name: response.name,
    }

    return data;
  } catch (error) {
    return {error: error.message, code: 500};
  }
}

const getUsersService = async (schema) => {
  try {
    const response = await repository.get(schema);

    if(response.length === 0) return {error: 'No hay usuarios', code: 404}
    
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
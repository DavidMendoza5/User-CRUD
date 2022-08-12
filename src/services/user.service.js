const repository = require('../repository/abstract.repository');
const Agent = require('../schemas/user.schema');
const validateCredentials = require('../utils/validate.credentials');
const generateToken = require('../utils/jwt');
const encryptPassword = require('../utils/encrypt');

const createUserService = async (data) => {
  try {
    data.password = await encryptPassword(data.password);
    const response = await repository.createInDB(Agent, data);

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

const getUserByIdService = async (id) => {
  try {
    const response = await repository.getOne(Agent, id);
    
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

const getUsersService = async () => {
  try {
    const response = await repository.get(Agent);

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

const updateUserService = async (id, data) => {
  try {
    const response = await repository.update(Agent, id, data);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

const deleteUserService = async (id) => {
  try {
    await repository.deleteData(Agent, id);

  } catch (error) {
    throw new Error(error.message);
  }
}

const logInUserService = async (data) => {
  try {
    const email = { email: data.email }
    const response = await repository.getOne(Agent, email);
    if(!response) throw new Error('Error en las credenciales');


    const valid = await validateCredentials(data.password, response.password);
    if(!valid) throw new Error('Error en las credenciales');

    const dataToSign = {
      id: response.id,
      email: response.email,
    }

    const token = generateToken(dataToSign);
    
    return token;
  } catch (error) {
    return { error: error.message, code: 401 };
  }
}

module.exports = {
  createUserService,
  getUserByIdService,
  getUsersService,
  updateUserService,
  deleteUserService,
  logInUserService,
}
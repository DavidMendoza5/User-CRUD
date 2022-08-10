const User = require('../schemas/user.schema');
const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const user = req.body;

    const newUser = await userService.createUserService(User, user);
    res.status(201).send({newUser, message: 'Usuario creado'});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getUserById = async (req, res) => {
  let code = 200;
  try {
    const userId = req.params;
    const user = await userService.getUserByIdService(User,userId);
    
    if(user.error) {
      code = 404;
      throw new Error(user.error);
    }

    res.status(code).send({user, message: 'Usuario encontrado'});
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const getUsers = async (req, res) => {
  let code = 200;
  try {
    const user = await userService.getUsersService(User);
    
    if(user.length === 0) {
      code = 404;
      throw new Error(user.error);
    }

    res.status(code).send({user, message: 'Usuarios encontrados'});
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const updateUser = async (req, res) => {
  let code = 200;
  try {
    const userId = req.params;
    const user = req.body;

    await userService.updateUserService(User, userId, user);

    res.status(code).send({user, message: 'Usuario actualizado'});
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
}
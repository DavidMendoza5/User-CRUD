const userService = require('../services/user.service');

const logIn = async (req, res) => {
  let code = 200;
  try {
    const user = req.body;

    const token = await userService.logInUserService(user);

    if(token.error) {
      code = 401;
      throw new Error('Error en las credenciales');
    }
    
    res.status(code).send({ token, message: 'Sesión iniciada' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const createUser = async (req, res) => {
  try {
    const user = req.body;

    const newUser = await userService.createUserService(user);
    res.status(201).send({ newUser, message: 'Usuario creado' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getUserById = async (req, res) => {
  let code = 200;
  try {
    const userId = req.params;
    const user = await userService.getUserByIdService(userId);
    
    if(user.error) {
      code = 404;
      throw new Error(user.error);
    }

    res.status(code).send({ user, message: 'Usuario encontrado' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const getUsers = async (req, res) => {
  let code = 200;
  try {
    const users = await userService.getUsersService();
    
    if(users.length === 0) {
      code = 404;
      throw new Error(users.error);
    }

    res.status(code).send({ users, message: 'Usuarios encontrados' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.params;
    const user = req.body;

    await userService.updateUserService(userId, user);

    res.status(200).send({ user, message: 'Usuario actualizado' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params;

    await userService.deleteUserService(userId);

    res.status(204).send({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
  logIn,
}
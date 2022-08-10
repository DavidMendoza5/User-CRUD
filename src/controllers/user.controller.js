const User = require('../schemas/user.schema');
const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const user = req.body;

    const newUser = await userService.createUserService(User, user);
    res.status(201).send({newUser, message: 'User created'});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params;
    const user = await userService.getUserByIdService(User,userId);
    res.status(201).send({user, message: 'User found'});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getUsers = async (req, res) => {
  try {
    const user = await userService.getUsersService(User);
    res.status(201).send({user, message: 'User found'});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  createUser,
  getUserById,
  getUsers
}
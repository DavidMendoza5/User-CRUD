const User = require('../schemas/user.schema');
const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const user = req.body;

    await userService.createUserService(User, user);
    res.status(201).send({user, message: 'User created'});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  createUser,
}
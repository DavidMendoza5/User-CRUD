const agentService = require('../services/user.service');
require('dotenv').config();

async function createAgentSeed() {
  try {
    const data = {
      "name": process.env.NAME,
      "email": process.env.EMAIL,
      "password": process.env.PASSWORD
    } 
    const userFound = await agentService.getUserByEmailService({email: data.email});

    if(Object.keys(userFound).length === 0) await agentService.createUserService(data);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = createAgentSeed;
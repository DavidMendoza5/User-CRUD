const agentService = require('../services/user.service');

async function createAgentSeed() {
  try {
    const data = {
      "name": "Admin",
      "email": "admin@gmail.com",
      "password": "12345"
    } 
    const userFound = await agentService.getUserByEmailService({email: data.email});

    if(Object.keys(userFound).length === 0) await agentService.createUserService(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = createAgentSeed;
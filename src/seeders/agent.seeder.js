const agentService = require('../services/user.service');

async function createAgentSeed() {
  try {
    const data = {
      "name": "Admin",
      "email": "admin@gmail.com",
      "password": "12345"
    } 
    await agentService.createUserService(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = createAgentSeed;
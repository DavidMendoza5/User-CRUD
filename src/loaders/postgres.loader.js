const dataSource = require('../../dataSource');
const createAgentSeeder = require('../seeders/agent.seeder');

const createConnection = async () => {
  try {
    await dataSource.initialize();
    await createAgentSeeder();
  } catch (error) {
    console.log(error);
  }
};

module.exports = createConnection;
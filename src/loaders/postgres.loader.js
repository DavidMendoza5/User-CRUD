const dataSource = require('../../dataSource');

const createConnection = async () => {
  try {
    await dataSource.initialize();
  } catch (error) {
    console.log(error);
  }
};

module.exports = createConnection;
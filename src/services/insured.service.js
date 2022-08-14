const repository = require('../repository/abstract.repository');
const Insured = require('../schemas/insured.schema');

const createInsuredService = async (data) => {
  try {
    const response = await repository.createInDB(Insured, data);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createInsuredService,
};
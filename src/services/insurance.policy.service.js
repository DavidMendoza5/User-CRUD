const repository = require('../repository/abstract.repository');
const InsurancePolicy = require('../schemas/insurance.policy.schema');

const createInsurancePolicyService = async (data) => {
  try {
    const response = await repository.createInDB(InsurancePolicy, data);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createInsurancePolicyService,
}
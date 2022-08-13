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

const getInsurancePolicyByIdService = async (id) => {
  try {
    const filters = {
      where: id,
      relations: ['agentId', 'clientId']
    }

    const response = await repository.get(InsurancePolicy, filters);
    const filteredResponse = response[0];
    
    const data = {
      id: filteredResponse.id,
      startDate: filteredResponse.startDate,
      endingDate: filteredResponse.endingDate,
      insuranceCarrier: filteredResponse.insuranceCarrier,
      policyType: filteredResponse.policyType,
      status: filteredResponse.status,
      agent: filteredResponse.agentId.id,
      client: filteredResponse.clientId.id,
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createInsurancePolicyService,
  getInsurancePolicyByIdService,
}
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

const getInsuredByIdService = async (id) => {
  try {
    const whereParams = {
      'id': id.id,
    }

    const filters = {
      where: whereParams,
      relations: ['insurancePolicyId'],
    }

    const response = await repository.get(Insured, filters);
    if(response.length === 0) return { error: 'No existe el asegurado', code: 404 };
    const filteredResponse = response[0];
    
    const data = {
      id: filteredResponse.id,
      name: filteredResponse.name,
      age: filteredResponse.age,
      insurancePolicy: filteredResponse.insurancePolicyId.id,
      policyType: filteredResponse.insurancePolicyId.policyType,
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createInsuredService,
  getInsuredByIdService,
};
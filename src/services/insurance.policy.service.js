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

const getInsurancePolicyByIdService = async (id, user) => {
  try {
    const whereParams = {
      'id': id.id,
      'agentId.id': user,
    }

    const filters = {
      where: whereParams,
      relations: ['agentId', 'clientId']
    }

    const response = await repository.get(InsurancePolicy, filters);
    if(response.length === 0) throw new Error('No existe la póliza');
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

const getInsurancePoliciesService = async (user) => {
  try {
    const whereParams = {
      'agentId.id': user,
    }

    const filters = {
      where: whereParams,
      relations: ['agentId', 'clientId']
    }

    const response = await repository.get(InsurancePolicy, filters);

    if(response.length === 0) return { error: 'No hay pólizas de seguro', code: 404 };
    
    const data = response.map((element) => {
      const newData = {
        id: element.id,
        startDate: element.startDate,
        endingDate: element.endingDate,
        insuranceCarrier: element.insuranceCarrier,
        policyType: element.policyType,
        status: element.status,
        agent: element.agentId.id,
        client: element.clientId.id,
      }
        return newData;
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createInsurancePolicyService,
  getInsurancePolicyByIdService,
  getInsurancePoliciesService,
}
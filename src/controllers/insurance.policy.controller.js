const insurancePolicyService = require('../services/insurance.policy.service');

const createInsurancePolicy = async (req, res) => {
  try {
    const insurancePolicy = req.body;

    const newInsurancePolicy = await insurancePolicyService.createInsurancePolicyService(insurancePolicy);
    res.status(201).send({ newInsurancePolicy, message: 'Póliza de seguro creada' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getcreateInsurancePolicyById = async (req, res) => {
  let code = 200;
  try {
    const insuranceId = req.params;
    const user = req.user.id;
    const insurancePolicy = await insurancePolicyService.getInsurancePolicyByIdService(insuranceId, user);
    
    if(insurancePolicy.error) {
      code = 404;
      throw new Error(insurancePolicy.error);
    }

    res.status(code).send({ insurancePolicy, message: 'Póliza de seguro encontrado' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const getcreateInsurancePolicies = async (req, res) => {
  let code = 200;
  try {
    const user = req.user.id;
    const insurancePolicies = await insurancePolicyService.getInsurancePoliciesService(user);
    
    if(insurancePolicies.length === 0) {
      code = 404;
      throw new Error(insurancePolicies.error);
    }

    res.status(code).send({ insurancePolicies, message: 'Pólizas de seguro encontradas' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

module.exports = {
  createInsurancePolicy,
  getcreateInsurancePolicyById,
  getcreateInsurancePolicies,
}
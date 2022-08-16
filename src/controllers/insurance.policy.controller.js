const insurancePolicyService = require('../services/insurance.policy.service');

const createInsurancePolicy = async (req, res) => {
  try {
    const insurancePolicy = req.body;
    const user = req.user.id;
    insurancePolicy.agentId = user;

    const newInsurancePolicy = await insurancePolicyService.createInsurancePolicyService(insurancePolicy);
    res.status(201).send({ newInsurancePolicy, message: 'Póliza de seguro creada' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getcInsurancePolicyById = async (req, res) => {
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

const getInsurancePolicies = async (req, res) => {
  let code = 200;
  try {
    const query = req.query;
    const user = req.user.id;
    const insurancePolicies = await insurancePolicyService.getInsurancePoliciesService(user, query);
    
    if(insurancePolicies.length === 0) {
      code = 404;
      throw new Error(insurancePolicies.error);
    }

    res.status(code).send({ insurancePolicies, message: 'Pólizas de seguro encontradas' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const updateInsurancePolicy = async (req, res) => {
  try {
    const insuranceId = req.params;
    const insurancePolicy = req.body;

    await insurancePolicyService.updateInsurancePolicyService(insuranceId, insurancePolicy);

    res.status(200).send({ insurancePolicy, message: 'Póliza de seguro actualizada' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const deleteInsurancePolicy = async (req, res) => {
  try {
    const insuranceId = req.params;

    await insurancePolicyService.deleteInsurancePolicyService(insuranceId);

    res.status(204).send({ message: 'Póliza eliminada' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  createInsurancePolicy,
  getcInsurancePolicyById,
  getInsurancePolicies,
  updateInsurancePolicy,
  deleteInsurancePolicy,
}
const insuredService = require('../services/insured.service');

const createInsured = async (req, res) => {
  try {
    const insured = req.body;

    const newInsured = await insuredService.createInsuredService(insured);
    res.status(201).send({ newInsured, message: 'Nuevo asegurado creado' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getInsuredById = async (req, res) => {
  let code = 200;
  try {
    const insuredId = req.params;
    const insured = await insuredService.getInsuredByIdService(insuredId);
    
    if(insured.error) {
      code = 404;
      throw new Error(insured.error);
    }

    res.status(code).send({ insured, message: 'Asegurado encontrado' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const getInsured = async (req, res) => {
  let code = 200;
  try {
    const insured = await insuredService.getInsuredService();
    
    if(insured.length === 0) {
      code = 404;
      throw new Error(insured.error);
    }

    res.status(code).send({ insured, message: 'Asegurados encontrados' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const updateInsured = async (req, res) => {
  try {
    const insuredId = req.params;
    const insured = req.body;

    await insuredService.updateInsuredService(insuredId, insured);

    res.status(200).send({ insured, message: 'La información del asegurado fue actualizada' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const deleteInsured = async (req, res) => {
  try {
    const insuredId = req.params;

    await insuredService.deleteInsuredService(insuredId);

    res.status(204).send({ message: 'Asegurado eliminado' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}


module.exports = {
  createInsured,
  getInsuredById,
  getInsured,
  updateInsured,
  deleteInsured,
}
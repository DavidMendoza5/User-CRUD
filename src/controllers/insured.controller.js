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

module.exports = {
  createInsured,
}
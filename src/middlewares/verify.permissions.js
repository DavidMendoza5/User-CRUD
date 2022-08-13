const repository = require('../repository/abstract.repository');

module.exports = (schema) => async (req, res, next) => {
  try {
    const filters = {
      where: {
        id: req.params.id
      },
      relations: ['agentId']
    }

    const found = await repository.get(schema, filters);
    if(found[0].agentId.id !== req.user.id) throw new Error('Acceso al recurso denegado');
    next();
  } catch (error) {
    res.status(401).json({ error: error.message});
  }
}
const repository = require('../repository/abstract.repository');

module.exports = (schema, reqProperty, property) => async (req, res, next) => {
  try {
    const id = { id: req[reqProperty][property] };

    const exist = await repository.getOne(schema, id);
    if (!exist) {
      throw new Error(`No se encontró el dato con ID: ${req[reqProperty][property]}`);
    };

    next();
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};
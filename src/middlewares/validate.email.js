const repository = require('../repository/abstract.repository');

module.exports = (schema, reqProperty, property) => async (req, res, next) => {
  try {
    const email = { email: req[reqProperty][property] };

    const exist = await repository.getOne(schema, email);
    if (exist) {
      throw new Error(`El correo ${req[reqProperty][property]} ya ha sido utlizado`);
    };

    next();
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};
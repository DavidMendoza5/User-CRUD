module.exports = (schema, reqProperty) => async (req, res, next) => {
  try {
    if (!req[reqProperty]) {
      throw new Error(`No se encontró la propiedad ${reqProperty}`);
    };
    const validation = schema.validate(req[reqProperty]);
    if (validation.error) {
      const errorDetails = validation.error.details[0];
      throw new Error(errorDetails.message);
    }
    next();
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
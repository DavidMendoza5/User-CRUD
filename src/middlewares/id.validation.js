const Joi = require('joi');

const getById = Joi.object({
  id: Joi.string()
  .regex(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i)
  .required()
  .messages({
    'string.base': 'El identificador debe ser un texto',
    'string.empty': 'El identificador no debe ser un texto vacío',
    'string.pattern.base': 'El identificador es inválido',
    'any.required': 'El identificador es un campo requerido',
  }),
});

module.exports = getById;
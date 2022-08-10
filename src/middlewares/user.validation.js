const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'El nombre debe ser un texto',
    'string.empty': 'El nombre no debe ser un texto vacío',
    'any.required': 'El nombre es un campo requerido',
  }),
  username: Joi.string().trim().required().messages({
    'string.base': 'El username debe ser un texto',
    'string.empty': 'El username no debe ser un texto vacío',
    'any.required': 'El username es un campo requerido',
  }),
  password: Joi.string().trim().required().messages({
    'string.base': 'La contraseña debe ser un texto',
    'string.empty': 'La contraseña no debe ser un texto vacío',
    'any.required': 'La contraseña es un campo requerido',
  }),
});

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

module.exports = {
  create,
  getById,
}
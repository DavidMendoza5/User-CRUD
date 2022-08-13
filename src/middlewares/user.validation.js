const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'El nombre debe ser un texto',
    'string.empty': 'El nombre no debe ser un texto vacío',
    'any.required': 'El nombre es un campo requerido',
  }),
  email: Joi.string().trim().email().required().messages({
    'string.base': 'El correo electrónico debe ser un texto',
    'string.empty': 'El correo electrónico no debe ser un texto vacío',
    'string.email': 'La correo electrónico tiene un formato inválido',
    'any.required': 'El correo electrónico es un campo requerido',
  }),
  password: Joi.string().trim().required().messages({
    'string.base': 'La contraseña debe ser un texto',
    'string.empty': 'La contraseña no debe ser un texto vacío',
    'any.required': 'La contraseña es un campo requerido',
  }),
});

const update = Joi.object({
  name: Joi.string().trim().optional().messages({
    'string.base': 'El nombre debe ser un texto',
    'string.empty': 'El nombre no debe ser un texto vacío',
  }),
  email: Joi.string().trim().email().optional().messages({
    'string.base': 'El correo electrónico debe ser un texto',
    'string.empty': 'El correo electrónico no debe ser un texto vacío',
    'string.email': 'La correo electrónico tiene un formato inválido',
  }),
  password: Joi.string().trim().optional().messages({
    'string.base': 'La contraseña debe ser un texto',
    'string.empty': 'La contraseña no debe ser un texto vacío',
  }),
});

module.exports = {
  create,
  update,
}
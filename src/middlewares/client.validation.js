const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'El nombre debe ser un texto',
    'string.empty': 'El nombre no debe ser un texto vacío',
    'any.required': 'El nombre es un campo requerido',
  }),
  phone: Joi.string()
    .trim()
    .required()
    .regex(
      /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8,10}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
    )
    .messages({
      'string.base': 'El número de teléfono debe ser un texto',
      'string.empty': 'El número de teléfono no debe ser un texto vacío',
      'string.pattern.base': 'Número de teléfono inválido',
      'any.required': 'El número de teléfono es un campo requerido',
    }),
  email: Joi.string().trim().email().required().messages({
    'string.base': 'El correo electrónico debe ser un texto',
    'string.empty': 'El correo electrónico no debe ser un texto vacío',
    'string.email': 'La correo electrónico tiene un formato inválido',
    'any.required': 'El correo electrónico es un campo requerido',
  }),
});

const update = Joi.object({
  name: Joi.string().trim().optional().messages({
    'string.base': 'El nombre debe ser un texto',
    'string.empty': 'El nombre no debe ser un texto vacío',
  }),
  phone: Joi.string()
    .trim()
    .optional()
    .regex(
      /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8,10}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
    )
    .messages({
      'string.base': 'El número de teléfono debe ser un texto',
      'string.empty': 'El número de teléfono no debe ser un texto vacío',
      'string.pattern.base': 'Número de teléfono inválido',
    }),
  email: Joi.string().trim().email().optional().messages({
    'string.base': 'El correo electrónico debe ser un texto',
    'string.empty': 'El correo electrónico no debe ser un texto vacío',
    'string.email': 'La correo electrónico tiene un formato inválido',
  }),
});

module.exports = {
  create,
  update
}
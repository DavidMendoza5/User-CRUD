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
  agentId: Joi.string()
  .regex(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i)
  .required()
  .messages({
    'string.base': 'El identificador del agente debe ser un texto',
    'string.empty': 'El identificador del agente no debe ser un texto vacío',
    'string.pattern.base': 'El identificador del agente es inválido',
    'any.required': 'El identificador del agente es un campo requerido',
  }),
});

module.exports = {
  create,
}
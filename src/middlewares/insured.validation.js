const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'El nombre del asegurado debe ser un texto',
    'string.empty': 'El nombre del asegurado no debe ser un texto vacío',
    'any.required': 'El nombre del asegurado es un campo requerido',
  }),
  age: Joi.number().required().messages({
    'number.base': 'La edad debe ser un número',
    'any.required': 'La edad es un campo requerido',
  }),
  insurancePolicyId: Joi.string()
    .regex(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i)
    .required()
    .messages({
      'string.base': 'El identificador de la póliza debe ser un texto',
      'string.empty': 'El identificador de la póliza no debe ser un texto vacío',
      'string.pattern.base': 'El identificador de la póliza es inválido',
      'any.required': 'El identificador de la póliza es un campo requerido',
  }),
});

const update = Joi.object({
  name: Joi.string().trim().optional().messages({
    'string.base': 'El nombre del asegurado debe ser un texto',
    'string.empty': 'El nombre del asegurado no debe ser un texto vacío',
  }),
  age: Joi.number().optional().messages({
    'number.base': 'La edad debe ser un número',
  }),
  insurancePolicyId: Joi.string()
    .regex(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i)
    .optional()
    .messages({
      'string.base': 'El identificador de la póliza debe ser un texto',
      'string.empty': 'El identificador de la póliza no debe ser un texto vacío',
      'string.pattern.base': 'El identificador de la póliza es inválido',
  }),
});

module.exports = {
  create,
  update,
}
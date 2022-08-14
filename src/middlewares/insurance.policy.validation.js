const Joi = require('joi');

const PolicyType = [
  'GASTOS_MEDICOS_MAYORES',
  'AUTO',
  'SEGURO_DE_VIDA',
]

const Status = [
  'VENCIDA',
  'VIGENTE',
]

const maxPrice = 99999999;

const create = Joi.object({
  startDate: Joi.string()
    .regex(/^[0-9]{4}\b-([0][1-9]|1[0-2])\b-([0][1-9]|1[0-9]|2[0-9]|3[0-1])\b$/i)  
    .required()
    .messages({
      'string.empty': 'La fecha de inicio no debe ser un texto vacío',
      'string.pattern.base': 'La fecha de inicio es inválida',
      'any.required': 'La fecha de inicio es un campo requerido',
  }),
  endingDate: Joi.string()
    .regex(/^[0-9]{4}\b-([0][1-9]|1[0-2])\b-([0][1-9]|1[0-9]|2[0-9]|3[0-1])\b$/i)    
    .required()
    .messages({
      'string.empty': 'La fecha de fin no debe ser un texto vacío',
      'string.pattern.base': 'La fecha de fin es inválida',
      'any.required': 'La fecha de fin es un campo requerido',
  }),
  insuranceCarrier: Joi.string().trim().required().messages({
    'string.base': 'El nombre de la aseguradora debe ser un texto',
    'string.empty': 'El nombre de la aseguradora no debe ser un texto vacío',
    'any.required': 'El nombre de la aseguradora es un campo requerido',
  }),
  policyType: Joi.string()
    .trim()
    .valid(...PolicyType)
    .required()
    .messages({
      'string.base': 'El tipo de póliza debe ser un texto',
      'string.empty': 'El tipo de póliza no debe ser un texto vacío',
      'any.only': `El tipo de póliza solo puede tomar alguno de los valores: ${PolicyType.join(', ',)}`,
      'any.required': 'El tipo de póliza es un campo requerido',
  }),
  price: Joi.number().less(maxPrice).required().messages({
    'number.base': 'El precio debe ser un número',
    'number.less': `El precio debe ser un número menor a ${maxPrice}`,
    'any.required': 'El precio es un campo requerido',
  }),
  status: Joi.string()
    .trim()
    .valid(...Status)
    .required()
    .messages({
      'string.base': 'El estatus de la póliza debe ser un texto',
      'string.empty': 'El estatus de la póliza no debe ser un texto vacío',
      'any.only': `El estatus de la póliza solo puede tomar alguno de los valores: ${PolicyType.join(', ',)}`,
      'any.required': 'El estatus de la póliza es un campo requerido',
  }),
  clientId: Joi.string()
    .regex(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i)
    .required()
    .messages({
      'string.base': 'El identificador del cliente debe ser un texto',
      'string.empty': 'El identificador del cliente no debe ser un texto vacío',
      'string.pattern.base': 'El identificador del cliente es inválido',
      'any.required': 'El identificador del cliente es un campo requerido',
    }),
});

const update = Joi.object({
  startDate: Joi.string()
    .regex(/^[0-9]{4}\b-([0][1-9]|1[0-2])\b-([0][1-9]|1[0-9]|2[0-9]|3[0-1])\b$/i)  
    .optional()
    .messages({
      'string.empty': 'La fecha de inicio no debe ser un texto vacío',
      'string.pattern.base': 'La fecha de inicio es inválida',
  }),
  endingDate: Joi.string()
    .regex(/^[0-9]{4}\b-([0][1-9]|1[0-2])\b-([0][1-9]|1[0-9]|2[0-9]|3[0-1])\b$/i)    
    .optional()
    .messages({
      'string.empty': 'La fecha de fin no debe ser un texto vacío',
      'string.pattern.base': 'La fecha de fin es inválida',
  }),
  insuranceCarrier: Joi.string().trim().optional().messages({
    'string.base': 'El nombre de la aseguradora debe ser un texto',
    'string.empty': 'El nombre de la aseguradora no debe ser un texto vacío',
  }),
  policyType: Joi.string()
    .trim()
    .valid(...PolicyType)
    .optional()
    .messages({
      'string.base': 'El tipo de póliza debe ser un texto',
      'string.empty': 'El tipo de póliza no debe ser un texto vacío',
      'any.only': `El tipo de póliza solo puede tomar alguno de los valores: ${PolicyType.join(', ',)}`,
  }),
  price: Joi.number().less(maxPrice).optional().messages({
    'number.base': 'El precio debe ser un número',
    'number.less': `El precio debe ser un número menor a ${maxPrice}`,
  }),
  status: Joi.string()
    .trim()
    .valid(...Status)
    .optional()
    .messages({
      'string.base': 'El estatus de la póliza debe ser un texto',
      'string.empty': 'El estatus de la póliza no debe ser un texto vacío',
      'any.only': `El estatus de la póliza solo puede tomar alguno de los valores: ${PolicyType.join(', ',)}`,
  }),
  clientId: Joi.string()
    .regex(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i)
    .optional()
    .messages({
      'string.base': 'El identificador del cliente debe ser un texto',
      'string.empty': 'El identificador del cliente no debe ser un texto vacío',
      'string.pattern.base': 'El identificador del cliente es inválido',
    }),
});

module.exports = {
  create,
  update,
}
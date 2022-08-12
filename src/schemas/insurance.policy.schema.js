const { EntitySchema } = require('typeorm');

const PolicyType = [
  'GASTOSMEDICOSMAYORES',
  'AUTO',
  'SEGURODEVIDA',
]

const Status = [
  'VENCIDA',
  'VIGENTE',
]

module.exports = new EntitySchema({
  name: 'InsurancePolicy',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    startDate: {
      type: Date,
    },
    endingDate: {
      type: Date,
    },
    insuranceCarrier: {
      type: String,
    },
    policyType: {
      type: String,
      enum: PolicyType,
    },
    price: {
      type: 'decimal',
      precision: 10,
      scale: 2,
    },
    status: {
      type: String,
      enum: Status,
    },
    createdAt: {
      type: 'timestamp with time zone',
      createDate: true,
    },
    updatedAt: {
      type: 'timestamp with time zone',
      updateDate: true,
    },
  },
  relations: {
    agentId: {
      type: 'many-to-one',
      target: 'Agent',
      cascade: false,
      joinColumn: {
        name: 'agentId',
        referencedColumnName: 'id',
      },
    },
    clientId: {
      type: 'many-to-one',
      target: 'Client',
      cascade: false,
      joinColumn: {
        name: 'clientId',
        referencedColumnName: 'id',
      },
    },
  },
});
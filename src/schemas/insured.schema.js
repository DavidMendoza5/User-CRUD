const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Insured',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
    },
    age: {
      type: Number,
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
    insurancePolicyId: {
      type: 'many-to-one',
      target: 'InsurancePolicy',
      cascade: false,
      joinColumn: {
        name: 'insurancePolicyId',
        referencedColumnName: 'id',
      },
    },
  },
});
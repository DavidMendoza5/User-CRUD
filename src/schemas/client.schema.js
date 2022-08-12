const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Client',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
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
      target: 'User',
      cascade: false,
      joinColumn: {
        name: 'agentId',
        referencedColumnName: 'id',
      },
    },
  },
});
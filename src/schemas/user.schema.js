const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Agent',
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
    password: {
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
});
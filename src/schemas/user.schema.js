const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'User',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
})
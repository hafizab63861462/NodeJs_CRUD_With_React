
const { EntitySchema } = require('typeorm');

const User = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    name: {
      type: 'varchar'
    },
    job: {
      type: 'varchar'
    },
    department: {
      type: 'varchar'
    },
    salary: {
      type: 'int'
    },
    hireDate: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    }
  }
});

module.exports = { User };

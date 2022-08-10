const dataSource = require('../../dataSource');

const createInDB = async (schema, data) => {
  try {
    const dataSaved = await dataSource.getRepository(schema).save(data);
    return dataSaved;
  } catch(error) {
    throw new Error('Error al insertar en la base de datos');
  }
}

module.exports = {
  createInDB,
}
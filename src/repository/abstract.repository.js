const dataSource = require('../../dataSource');

const createInDB = async (schema, data) => {
  try {
    const dataSaved = await dataSource.getRepository(schema).save(data);
    return dataSaved;
  } catch(error) {
    throw new Error('Error al insertar en la base de datos');
  }
}

const getById = async (schema, id) => {
  try {
    const data = await dataSource.getRepository(schema).findOneBy(id);
    return data;
  } catch (error) {
    throw new Error('Error al buscar en la base de datos');
  }
}

const get = async (schema) => {
  try {
    const data = await dataSource.getRepository(schema).find();
    return data;
  } catch (error) {
    throw new Error('Error al buscar en la base de datos');
  }
}

const update = async (schema, id, data) => {
  try {
    const dataUpdated = await dataSource.getRepository(schema).update(id, data);
    return dataUpdated;
  } catch (error) {
    throw new Error('Error al actualizar en la base de datos');
  }
}

module.exports = {
  createInDB,
  getById,
  get,
  update,
}
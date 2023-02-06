const dataSource = require('../../dataSource');

const createInDB = async (schema, data) => {
  try {
    const dataSaved = await dataSource.getRepository(schema).save(data);
    return dataSaved;
  } catch(error) {
    throw new Error('Error al insertar en la base de datos');
  }
}

const getOne = async (schema, filter) => {
  try {
    const data = await dataSource.getRepository(schema).findOneBy(filter);
    return data;
  } catch (error) {
    throw new Error('Error al buscar en la base de datos');
  }
}

const getOneWithFilters = async (schema, filter) => {
  try {
    const data = await dataSource.getRepository(schema).findOne(filter);
    return data;
  } catch (error) {
    throw new Error('Error al buscar en la base de datos');
  }
}

const get = async (schema, filters = {}) => {
  try {
    const data = await dataSource.getRepository(schema).find(filters);
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

const deleteData = async (schema, id) => {
  try {
    await dataSource.getRepository(schema).delete(id);
  } catch (error) {
    throw new Error('Error al eliminar en la base de datos');
  }
}

module.exports = {
  createInDB,
  getOne,
  getOneWithFilters,
  get,
  update,
  deleteData,
}
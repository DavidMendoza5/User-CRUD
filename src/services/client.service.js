const repository = require('../repository/abstract.repository');
const Client = require('../schemas/client.schema');

const createClientService = async (data) => {
  try {
    const response = await repository.createInDB(Client, data);

    const newClient = {
      id: response.id,
      email: response.email,
      name: response.name,
      phone: response.phone,
      agent: response.agentId,
    }

    return newClient;
  } catch (error) {
    throw new Error(error.message);
  }
}

const getClientsService = async () => {
  try {
    const response = await repository.get(Client, { relations: ['agentId'] });

    if(response.length === 0) return {error: 'No hay clientes', code: 404}
    
    const data = response.map((element) => {
      const newData = {
        id: element.id,
        email: element.email,
        name: element.name,
        phone: element.phone,
        agent: element.agentId.id,
        }
        return newData;
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createClientService,
  getClientsService,
}
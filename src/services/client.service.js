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

const getClientByIdService = async (id, user) => {
  try {
    const whereParams = {
      'id': id.id,
      'agentId.id': user,
    }

    const filters = {
      where: whereParams,
      relations: ['agentId']
    }

    const response = await repository.get(Client, filters);
    if(response.length === 0) throw new Error('No existe la póliza');
    const filteredResponse = response[0];
    
    const data = {
      id: filteredResponse.id,
      email: filteredResponse.email,
      name: filteredResponse.name,
      phone: filteredResponse.phone,
      agent: filteredResponse.agentId.id,
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const getClientsService = async (user) => {
  try {
    const whereParams = {
      'agentId.id': user,
    }

    const filters = {
      where: whereParams,
      relations: ['agentId']
    }

    const response = await repository.get(Client, filters);

    if(response.length === 0) return { error: 'No hay clientes', code: 404 };
    
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

const updateClientService = async (id, data) => {
  try {
    const response = await repository.update(Client, id, data);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

const deleteClientService = async (id) => {
  try {
    await repository.deleteData(Client, id);

  } catch (error) {
    throw new Error(error.message);
  }
}


module.exports = {
  createClientService,
  getClientsService,
  getClientByIdService,
  updateClientService,
  deleteClientService,
}
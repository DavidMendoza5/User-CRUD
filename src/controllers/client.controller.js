const clientService = require('../services/client.service');

const createClient = async (req, res) => {
  try {
    const client = req.body;

    const newClient = await clientService.createClientService(client);
    res.status(201).send({ newClient, message: 'Cliente creado' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getClientById = async (req, res) => {
  let code = 200;
  try {
    const clientId = req.params;
    const client = await clientService.getClientByIdService(clientId);
    
    if(client.error) {
      code = 404;
      throw new Error(client.error);
    }

    res.status(code).send({ client, message: 'Cliente encontrado' });
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

const getClients = async (req, res) => {
  let code = 200;
  try {
    const clients = await clientService.getClientsService();
    
    if(clients.length === 0) {
      code = 404;
      throw new Error(clients.error);
    }

    res.status(code).send({clients, message: 'Clientes encontrados'});
  } catch (error) {
    res.status(code).send({ message: error.message });
  }
}

module.exports = {
  createClient,
  getClients,
  getClientById,
}
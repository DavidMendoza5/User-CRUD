# Nativo Digital test

## Data base model
![Captura de pantalla de 2022-08-16 10-11-19](https://user-images.githubusercontent.com/42629297/184926093-08da863c-da4e-4d56-a89d-46847f5953f8.png)

## Schemas
- pk: Primary key
- fk: Foreign key
- Policy types: GASTOS_MEDICOS_MAYORES, AUTO, SEGURO_DE_VIDA
- Policy status: VENCIDA, VIGENTE

### Agent
Field | Value Type | Required | Default |
-- | -- | -- | -- |
id (pk) | uuid | true | uuid_generate_v4() |
name | varchar | true |
email | varchar | true |
password | varchar | true |
createdAt | timestamptz |true | now() |
updatedAt | timestamptz| true | now() |

### Client
Field | Value Type | Required | Default |
-- | -- | -- | -- |
id (pk) | uuid | true | uuid_generate_v4() |
name | varchar | true |
email | varchar | true |
phone | varchar | true |
agentId (fk) | uuid | true |
createdAt | timestamptz | true | now() |
updatedAt | timestamptz | true | now() |

### Insured
Field | Value Type | Required | Default |
-- | -- | -- | -- |
id (pk) | uuid | true | uuid_generate_v4() |
name | varchar | true |
age | int4 | true |
insurancePolicyId (fk) | uuid | true |
createdAt | timestamptz |true | now() |
updatedAt | timestamptz | true | now() |

### Insurance policy
Field | Value Type | Required | Default |
-- | -- | -- | -- |
id (pk) | uuid | true | uuid_generate_v4() |
startDate | timestamp | true |
endingDate | timestamp | true |
insuranceCarrier | varchar | true |
policyType | varchar | true |
price | numeric(10,2) | true |
status | varchar | true |
agentId (fk) | uuid | true |
clientId (fk) | uuid | true |
createdAt | timestamptz | true | now() |
updatedAt | timestamptz| true | now() |

## Before running the project
- Install dependencies with the following command: `npm i`
- Create a .env file based on .env.example:
```
PORT=12345
BCRYPT_HASH_ROUND=3

DATABASE_TYPE=postgres
DATABASE_HOST=localhost
DATABASE_PORT=12345
DATABASE_NAME=name
DATABASE_USERNAME=username
DATABASE_PASSWORD=password

NAME=admin
EMAIL=admin@gmail.com
PASSWORD=12345

JWT_SECRET=secret
JWT_ACCESS_TOKEN_EXP=1h
```
- Create the data base using the terminal or a client (TypeORM creates the tables but you must create the data base).
- Create your docker container for the data base(optional)
```
Creating the container:
docker run -d --name postgres -e POSTGRES_PASSWORD=postgres -p 5434:5432 postgres

Running postgres container in terminal:
docker exec -it container_name psql -U postgres

Creating a data base:
CREATE DATABASE data_base_name;
```


## Running the project
At first it'll be created an agent with the following data: email = admin@gmail.com, password = 12345
- Development: ```npm run dev```
- Production: ```npm start```
- Test: ```npm test```

## POST

### User/Agent (Bearer Token required)
- Path: http://localhost:3000/api/users
- Payload:
```
{
    "name": "Pepe",
    "email": "pepe@gmail.com",
    "password": "12345"
}
```
- Response (201):
```
{
    "newUser": {
        "id": "02481646-1fb9-451e-9c3f-f463732900bc",
        "name": "Pepe"
    },
    "message": "Usuario creado"
}
```

### Login
- Path: http://localhost:3000/api/login
- Payload:
```
{
    "email": "pepe@gmail.com",
    "password": "12345"
}
```
- Response (200):
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.   eyJpZCI6ImRjNzdiMzFlLTIwZWQtNGM2My05YTdjLWM0NDMzNDA5NWRlYiIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJpYXQiOjE2NjA2NjI5NzYsImV4cCI6MTY2MDY2NjU3Nn0.LfWSJioCNmdgtwYUpiUrDgp9E8k6-YPPNMRiH36b5-g",
    "message": "Sesión iniciada"
}
```

### Client (Bearer Token required)
- Path: http://localhost:3000/api/clients
- Payload:
```
{
    "name": "Marco",
    "phone": "9999999999",
    "email": "clients@gmail.com"
}
```
- Response (201):
```
{
    "newClient": {
        "id": "a620d8d3-5eb7-484b-a48f-00be9081ab6b",
        "email": "clients@gmail.com",
        "name": "Marco",
        "phone": "9999999999",
        "agent": "dc77b31e-20ed-4c63-9a7c-c44334095deb"
    },
    "message": "Cliente creado"
}
```

### Insurance policy (Bearer Token required)
- Path: http://localhost:3000/api/insurance-policies
- Payload:
```
{
    "startDate": "2022-06-30",
    "endingDate": "2022-08-23",
    "insuranceCarrier": "Aseguradora",
    "policyType": "GASTOS_MEDICOS_MAYORES",
    "price": 9999999.25,
    "status": "VIGENTE",
    "clientId": "22a001a4-ec0f-4323-9c0a-e32e42333b9b"
}
```
- Response (201):
```
{
    "newInsurancePolicy": {
        "startDate": "2022-06-30",
        "endingDate": "2022-08-23",
        "insuranceCarrier": "Aseguradora",
        "policyType": "GASTOS_MEDICOS_MAYORES",
        "price": 9999999.25,
        "status": "VIGENTE",
        "clientId": "22a001a4-ec0f-4323-9c0a-e32e42333b9b",
        "agentId": "dc77b31e-20ed-4c63-9a7c-c44334095deb",
        "id": "658f90f0-ca48-4682-aaae-ee6ccf927876",
        "createdAt": "2022-08-16T14:24:08.752Z",
        "updatedAt": "2022-08-16T14:24:08.752Z"
    },
    "message": "Póliza de seguro creada"
}
```

### Insured (Bearer Token required)
- Path: http://localhost:3000/api/insured
- Payload:
```
{
    "name": "Iván",
    "age": 23,
    "insurancePolicyId": "156cf1ac-a50b-48cd-b6e9-fe62315e3127"
}
```
- Response (201):
```
{
    "newInsured": {
        "name": "Iván",
        "age": 23,
        "insurancePolicyId": "156cf1ac-a50b-48cd-b6e9-fe62315e3127",
        "id": "e740304c-7795-422e-b696-54e059b39c36",
        "createdAt": "2022-08-16T15:22:10.180Z",
        "updatedAt": "2022-08-16T15:22:10.180Z"
    },
    "message": "Nuevo asegurado creado"
}
```

## GET

### User/Agent (Bearer Token required)
- Path: http://localhost:3000/api/users/dc77b31e-20ed-4c63-9a7c-c44334095deb

- Response (200):
```
{
    "user": {
        "id": "dc77b31e-20ed-4c63-9a7c-c44334095deb",
        "name": "David"
    },
    "message": "Usuario encontrado"
}
```

### Clients (Bearer Token required)
- Path: 
  * http://localhost:3000/api/clients/703c3a12-a09d-4313-8e2f-af40ae8d3e21
  * http://localhost:3000/api/clients

- Response (200) - Get all:
```
{
  "clients":
  [
    {
      "id": "703c3a12-a09d-4313-8e2f-af40ae8d3e21",
      "email": "client@gmail.com",
      "name": "Jorge",
      "phone": "9999999999",
      "agent": "dc77b31e-20ed-4c63-9a7c-c44334095deb"
    },
    {
      "id": "22a001a4-ec0f-4323-9c0a-e32e42333b9b",
      "email": "sarita@gmail.com",
      "name": "Sara",
      "phone": "9999999999",
      "agent": "dc77b31e-20ed-4c63-9a7c-c44334095deb"
    }
  ],
  "message": "Clientes encontrados"
}
```

### Insurance policies (Bearer Token required)
- Path:
  * http://localhost:3000/api/insurance-policies/320062eb-b54f-416b-b25e-4bafd7c6c659
  * http://localhost:3000/api/insurance-policies
  * http://localhost:3000/api/insurance-policies?policyType=GASTOS_MEDICOS_MAYORES&status=VENCIDA&endingDate=2022-02-15

- Response (200) - Get all:
```
{
    "insurancePolicies":
    [
      {
        "id": "1fc8e82b-b572-476d-ad30-d6af5214632d",
        "startDate": "2022-08-20T05:00:00.000Z",
        "endingDate": "2022-08-21T05:00:00.000Z",
        "insuranceCarrier": "Aseguradora",
        "policyType": "GASTOS_MEDICOS_MAYORES",
        "status": "VENCIDA",
        "agent": "dc77b31e-20ed-4c63-9a7c-c44334095deb",
        "client": "22a001a4-ec0f-4323-9c0a-e32e42333b9b"
      },
      {
        "id": "ed39d751-9097-4977-a856-1a13c950a66d",
        "startDate": "2022-06-30T05:00:00.000Z",
        "endingDate": "2022-08-23T05:00:00.000Z",
        "insuranceCarrier": "Aseguradora",
        "policyType": "GASTOS_MEDICOS_MAYORES",
        "status": "VENCIDA",
        "agent": "dc77b31e-20ed-4c63-9a7c-c44334095deb",
        "client": "22a001a4-ec0f-4323-9c0a-e32e42333b9b"
      }
    ],
  "message": "Pólizas de seguro encontradas"
}
```

### Insured (Bearer Token required)
- Path: 
  * http://localhost:3000/api/insured/c1a44ffa-72ef-43e5-b791-837a02a51434
  * http://localhost:3000/api/insured

- Response (200) - Get all:
```
{
  "insured":
  [
    {
      "id": "7404964a-1f39-45e9-884a-7d0f6777d5db",
      "name": "Iván",
      "age": 23,
      "insurancePolicy": "156cf1ac-a50b-48cd-b6e9-fe62315e3127",
      "policyType": "GASTOS_MEDICOS_MAYORES"
    },
    {
      "id": "e740304c-7795-422e-b696-54e059b39c36",
      "name": "Iván",
      "age": 23,
      "insurancePolicy": "156cf1ac-a50b-48cd-b6e9-fe62315e3127",
      "policyType": "GASTOS_MEDICOS_MAYORES"
    }
  ],
  "message": "Asegurados encontrados"
}
```

## Other methods

### PUT (Bearer Token required)
- Paths: 
  * http://localhost:3000/api/users/dc77b31e-20ed-4c63-9a7c-c44334095deb
  * http://localhost:3000/api/clients/703c3a12-a09d-4313-8e2f-af40ae8d3e21
  * http://localhost:3000/api/insurance-policies/320062eb-b54f-416b-b25e-4bafd7c6c659
  * http://localhost:3000/api/insured/c1a44ffa-72ef-43e5-b791-837a02a51434

### DELETE (Bearer Token required)
- Paths: 
  * http://localhost:3000/api/users/dc77b31e-20ed-4c63-9a7c-c44334095deb
  * http://localhost:3000/api/clients/703c3a12-a09d-4313-8e2f-af40ae8d3e21
  * http://localhost:3000/api/insurance-policies/320062eb-b54f-416b-b25e-4bafd7c6c659
  * http://localhost:3000/api/insured/c1a44ffa-72ef-43e5-b791-837a02a51434

## Docker compose

### Before running
- Modify the following data base options in .env file:
```
DATABASE_HOST=project_db
```

### Running with Docker
```
sudo docker-compose up
```

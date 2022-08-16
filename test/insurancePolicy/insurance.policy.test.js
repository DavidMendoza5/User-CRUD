const request = require('supertest');
const app = require('../../src/app');
const TOKEN = require('../mock');

describe('API /insurance-policies', () => {
    test('Should get all insurance policies', async () => {
        const response = await request(app).get('/api/insurance-policies')
          .set('Authorization', `Bearer ${TOKEN}`);
        
        expect(response.statusCode).toBe(200);
    });

    // test('Should create an insurance policy', async () => {
    //   const response = await request(app).post('/api/insurance-policies')
    //     .set('Authorization', `Bearer ${TOKEN}`)
    //     .send({
    //       "startDate": "2022-06-30",
    //       "endingDate": "2022-08-23",
    //       "insuranceCarrier": "Aseguradora",
    //       "policyType": "GASTOS_MEDICOS_MAYORES",
    //       "price": 9999999,
    //       "status": "VIGENTE",
    //       "clientId": "22a001a4-ec0f-4323-9c0a-e32e42333b9b"
    //     });

    //   expect(response.statusCode).toBe(201);
    // });
})
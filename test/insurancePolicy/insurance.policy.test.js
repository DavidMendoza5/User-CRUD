const request = require('supertest');
const app = require('../../src/app');
const TOKEN = require('../mock');

describe('API /insurance-policies', () => {
    test('Should get all insurance policies', async () => {
        const response = await request(app).get('/api/insurance-policies')
          .set('Authorization', `Bearer ${TOKEN}`);
        
        expect(response.statusCode).toBe(200);
    });
});
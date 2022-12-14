const request = require('supertest');
const app = require('../../src/app');
const userService = require('../../src/services/user.service');

describe('API /agents', () => {
    test('It should not login because the password is wrong', async () => {
      const response = await request(app).post('/api/login')
        .send({
          "email": "user@gmail.com",
          "password": "123456"
        });

      expect(response.statusCode).toBe(401);
    });
})
const request = require('supertest');
const app = require('../index');  // Adjust the path if needed

describe('GET /', () => {
  it('responds with Hello, CI/CD Pipeline!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, CI/CD Pipeline!');
  });
});

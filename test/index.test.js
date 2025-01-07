import server from '../index.js';  // Import the app
import request from 'supertest';  // For testing
import assert from 'assert';      // For assertions

describe('GET /', () => {
    it('should return the expected response', async () => {
        const response = await request(server).get('/');
        assert.strictEqual(response.text, 'Hello, this is index.js responding1!');
    });
});

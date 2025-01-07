import server from './index.js';  
import request from 'supertest';  
import assert from 'assert';      

after(() => {
    server.close();
});

describe('GET /', () => {
    it('should return the expected response', async () => {
        const response = await request(server).get('/');
        assert.strictEqual(response.text, 'Hello, this is index.js responding!');
    });
});

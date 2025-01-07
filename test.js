import server from './index.js';  
import request from 'supertest';  
import assert from 'assert';  


describe('GET /', () => {
  it('should return Index responding!!!', async () => {
    const response = await request(server).get('/');
    console.log(response.text);  
    assert.strictEqual(response.text, 'Index responding!!!');
  });
});
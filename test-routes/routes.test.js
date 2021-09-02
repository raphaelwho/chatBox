const supertest = require('supertest');
const app = require('../server/server.js').app;
const request = supertest(app);
// const db = require('../../pg/index.js');

describe('GET profile', () => {
  it('should respond with a string "profile!"', async () => {
    let response = await request.get('/profile');
    // let profile = response.body.results;
    // console.log('PROFILE', response.text);

    expect(response.text).toBe('profile!');
  });
});
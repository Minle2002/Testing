const request = require('supertest');
const {app, server} = require('../app');

describe('HTML', function() {
  it('RESPONDS WITH HTML', function(done) {
    request(server)
      .get('/')
      .expect('content-type', /html/)
      .expect(200, done);
  });
});

describe('INVALID', function() {
  it('RESPONDS WITH 404', function(done) {
    request(server)
      .get('/invalid-route') 
      .expect(404, done); 
  });
});
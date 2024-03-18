const request = require('supertest');
const {app, server} = require('./app');

describe('GET /', function() {
  it('Responds with HTML', function(done) {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});

describe('Invalid Routes', function() {
  it('Responds with 404', function(done) {
    request(server)
      .get('/invalid-route') 
      .expect(404, done); 
  });
});
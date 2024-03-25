  const request = require('supertest');
  const {app, server} = require('./app');
  const mongoose = require('mongoose');
  const VideoGame = require('./models/games');

  describe('VIDEOGAME', () => {
    before(async () => {
      await mongoose.connect('mongodb://localhost:27017/video-game-test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    });
    
    after(async () => {
      await mongoose.connection.close();
    });
  
    it('ADDS NEW VIDEOGAME', (done) => {
      const newgame = {
        title: 'HSR',
        image: 'image.jpg',
        price: 'Free',
        description: '...'
      };
  
      request(app)
        .post('/videogames')
        .send({ videogame: newgame })
        .expect(302, done); 
    });
  
    it('HANDLES ERROR CONDITION', (done) => {
      request(app)
        .get('/nonexistentendpoint') // Accessing a non-existent endpoint to trigger an error
        .expect(404) // Expecting a 404 Not Found error
        .end((err, res) => {
          if (err) return done(err); // Pass any error to done
          done(); // Finish the test
        });
    });
});
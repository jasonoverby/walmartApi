const hapiServer = require('../server');

describe('ping controller', async () => {
  const server = await hapiServer();
  console.log('hi');

  const options = {
    method: 'GET',
    url: '/',
  };

  beforeAll((done) => {
    server.on('start', () => {
      done();
    });
  });

  afterAll((done) => {
    server.on('stop', () => {
      done();
    });
    server.stop();
  });

  test('responds with success for ping', (done) => {
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      expect(response.result).toBeInstanceOf(Object);
      done();
    });
  });
});

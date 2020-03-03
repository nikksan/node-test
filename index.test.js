const request = require('request-promise');

describe('Ping test', () => {
  let server;
  let url;
  
  beforeAll(async () => {
    server = await require('./index');
    url = `http://localhost:${server.address().port}`;
  });
  
  afterAll(() => {
    server.close()
  });

  it('should return 200 status code', async () => {
    const response = await request(url + '/', {
      resolveWithFullResponse: true,
    });

    expect(response.statusCode).toBe(200);
  });
});
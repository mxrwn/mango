const request = require('supertest')
const app = require('../src/server')

describe('server-routes', () => {
  it('GET /manga should give all mangas saved in database', async () => {
    await request(app).get('/manga').expect(200)
  });
  it('POST /manga sould add a manga', async() => {
    await request(app).post('/manga')
  .send({
    title : 'test',
    url : 'test.com',
    image : 'test',
    total : 100,
    scantrad : false,
    category : 'all'
  })
  .expect(200)
  });
  it('POST /manga with no data should give 401 code', async() => {
    await request(app).post('/manga')
  .send({
  })
  .expect(401)
  });
  

  it('PUT /manga should give 400 error', async() => {
    await request(app).put('/manga').expect(400)
  });
});
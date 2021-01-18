const { GetMangasFromScanTrad } = require('../src/utils/utils')
const request = require('supertest')
const app = require('../src/server')
test('GetMangasFromScanTrad Should go well', async() => {
  const result = GetMangasFromScanTrad()
  result.then(data => {
    expect(data).toBe(200)
  })
})

test('GET /manga should give all mangas saved in database',async() => {
  await request(app).get('/manga').expect(200)
})

test('POST /manga should add a manga', async() => {
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
})
test('POST /manga with no data should give 401', async() => {
  await request(app).post('/manga')
  .send({
  })
  .expect(401)
})
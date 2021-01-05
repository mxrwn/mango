const { GetMangasFromScanTrad } = require('./../src/utils/utils')
const request = require('supertest')
const app = require('./../src/server')
test('GetMangasFromScanTrad Should go well', () => {
  const result = GetMangasFromScanTrad()
  result.then(data => {
    expect(data).toBe(200)
  })
})

test('GET /manga should give all mangas saved in database', () => {
  request(app).get('/manga').expect(200)
})

test('POST /manga should add a manga', () => {
  request(app).post('/manga')
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
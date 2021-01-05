const { GetMangasFromScanTrad } = require('./../src/utils/utils')

test('Should output all scantrad mangas', () => {
  const result = GetMangasFromScanTrad()
  result.then(data => {
    expect(data).toBe(200)
  })
})
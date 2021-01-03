const app = require('./server')
const {GetMangasFromScanTrad} = require('./utils/utils')

const port = 5000

app.listen(port, () => {

  console.clear()

  console.log(`Listening to port ${port}`)
  
  GetMangasFromScanTrad()
})



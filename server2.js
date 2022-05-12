const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.end()
  console.log(req)
})

app.post('/', (req, res) => {
  res.end()
  console.log(req)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
  const { rawHeaders, httpVersion, method, socket, url } = req;
  const { remoteAddress, remoteFamily } = socket;
  console.log(
    JSON.stringify({
      timestamp: Date.now(),
      rawHeaders,
      httpVersion,
      method,
      remoteAddress,
      remoteFamily,
      url
    })
  );
  res.end()
})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
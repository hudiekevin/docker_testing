const express = require('express')
const app = express()

// reply to request with "Hello World Docker Automatic build!"
app.get('/', (req, res) => {
  res.send('Hello World Docker Automatic build!')
})

// start a server on port 8080
const server = app.listen(8080, () => {
  const port = server.address().port
  console.log('Example app listening on port', port)
})

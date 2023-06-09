const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Hello World from route 2!')
})

app.get('/ouestions ', (req, res) => {
  res.send('Hello World from route 3!')
})

app.get('/submissions', (req, res) => {
  res.send('Hello World from route 4 !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
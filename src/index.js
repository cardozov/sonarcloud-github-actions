const express = require('express')
const helmet = require('helmet')

const app = express()
const port = 3000
app.use(helmet())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('OK')
})

app.route('/person')
  .get((req, res) => {
    res.send('This is a person')
  })
  .post((req, res) => {
    res.send('This is a person')
  })
  .patch((req, res) => {
    res.send('This is a person')
  })
  .put((req, res) => {
    res.send('This is a person')
  })
  .delete((req, res) => {
    res.send('This is a person')
  })

app.route('/product')
  .get((req, res) => {
    res.send('This is a product')
  })
  .post((req, res) => {
    res.send('This is a product')
  })
  .patch((req, res) => {
    res.send('This is a product')
  })
  .put((req, res) => {
    res.send('This is a product')
  })
  .delete((req, res) => {
    res.send('This is a product')
  })

const server = app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})

module.exports = server
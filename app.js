const express = require('express')
const harp = require('harp')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(harp.mount(__dirname + '/public'))

app.listen(9000)

app.get('/', function (req, res) {
  res.send('root')
})

app.get('/contact', function (req, res) {
  res.send('contact')
})

app.get('/work', function (req, res) {
  res.send('work')
})

app.get('/projects', function (req, res) {
  res.send('projects')
})

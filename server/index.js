const express = require('express')
const app = express()
const port = 3001
const pgadmin = require('./pgadmin')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  pgadmin.getEmployees()
    .then(response => {
      res.status(200).send(response.map(i => i.tablename));
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.post('/', (req, res) => {
  console.log(req.body.query)
  pgadmin.sendQuery(req.body.query)
    .then(response => {
      res.status(200).send(response.map(i => i.tablename));
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/rooms', (req, res) => {
  pgadmin.getRooms()
    .then(response => {
      res.status(200).send(response.map(i => i.tablename));
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
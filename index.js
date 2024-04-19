const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

const user = [
      {id: 1, name: "John", email: "john@example.com"},
      {id: 2, name: "Rahim", email: "rahim@example.com"},
      {id: 3, name: "Karim", email: "karim@example.com"}
]

app.get('/users', (req, res) => {
      res.send(user);
})

app.get('/', (req, res) => {
      res.send('Welcome to the server')
})

app.listen(port, () => {
      console.log(`listening on ${port}`);
})
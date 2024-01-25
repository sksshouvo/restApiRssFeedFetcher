const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes');
require('dotenv').config()
console.log(process.env.DB_CONNECTION_STRING)

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send({"geetings":"Hello World!"})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
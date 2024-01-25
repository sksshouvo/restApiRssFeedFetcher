const express = require('express')
const app = express()
const routes = require('./routes');
const port = process.env.PORT

app.use('/api', routes);
app.get('/', (req, res) => {
  res.send({"geetings":"Hello World!"})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
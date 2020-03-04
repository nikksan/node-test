const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send({ error: null }));

module.exports = new Promise((resolve) => {
  const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
    resolve(server);
  });
});
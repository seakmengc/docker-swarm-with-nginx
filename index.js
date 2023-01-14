const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('Hello World! Your ip is: ' + req.ip);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});

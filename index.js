'use strict';

const express = require('express');
const app = express();
const port = 3001;


app.get('/', (req, res) => {
  res.send('Hello from our sever!');
});

app.listen(port, () => {
  console.log(` listening at http://localhost:${port}`);
});


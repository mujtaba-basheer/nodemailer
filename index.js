const express = require('express');
const app = express();
const router = require('./route');

app.use(express.json());

app.use('/api/v1/', router);

const port = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
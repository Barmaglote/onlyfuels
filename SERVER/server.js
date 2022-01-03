const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;
const api = require("./routes/api");
const bodyParser = require('body-parser');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.get('/', (req, res) => {
  res.send('MongoDB REST API service');
})

// REST API
app.get('/api/test', api.test);
app.post('/api/upload/:collection', api.upload);
app.get('/api/task/:taskId', api.task);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

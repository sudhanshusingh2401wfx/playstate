const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

let dataStore = null;

app.post('/save-data', (req, res) => {
  const inputData = req.body;
  dataStore = inputData;
  res.json({ message: 'Data saved successfully' });
});

app.get('/get-data', (req, res) => {
  if (dataStore !== null) {
    res.json({ data: dataStore });
  } else {
    res.json({ data: "No data available" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
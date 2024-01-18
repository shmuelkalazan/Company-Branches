const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/stores', async (req, res) => {
  try {
    const response = await axios.get('https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json');
    res.json(response.data);
  } catch (error) {
    console.error("server error");
    res.status(error.response ? error.response.status : 500).json({ error: 'Internal Server Error' });

  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



const express = require('express');
const axios = require('axios');

const app = express();

app.get('/pokemon/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 8000');
});

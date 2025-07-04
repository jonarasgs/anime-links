const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/animes', async (req, res) => {
  try {
    const { data } = await axios.get('https://theanimesapi.herokuapp.com/listanimes');
    const ptanimes = data.filter(a =>
      a.language && a.language.toLowerCase().includes('pt')
    );
    res.status(200).json(ptanimes);
  } catch (e) {
    res.status(500).json({ error: 'Falha ao buscar animes.' });
  }
});

module.exports = app;

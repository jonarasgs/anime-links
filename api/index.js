const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/animes', async (req, res) => {
  try {
    const response = await axios.get('https://api-animesbrasil.herokuapp.com/api/animes');
    const animes = response.data;

    // Filtrar animes dublados ou legendados
    const filteredAnimes = animes.filter(anime => anime.language === 'pt-BR');

    res.json(filteredAnimes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar animes' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

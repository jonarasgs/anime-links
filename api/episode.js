// api/episode.js
const axios = require('axios');

module.exports = async (req, res) => {
  const { slug, ep } = req.query;
  if (!slug || !ep) {
    return res.status(400).json({ error: 'Parâmetros slug e ep são obrigatórios.' });
  }
  try {
    const url = `https://sugoi-api.herokuapp.com/episode/${ep}/${slug}`;
    const { data } = await axios.get(url);
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar dados na SugoiAPI.' });
  }
};

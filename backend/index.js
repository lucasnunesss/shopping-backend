const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')


dotenv.config()
app.use(cors());
  const API_KEY = process.env.KEY
app.get('/api/games', cors(), async (req, res) => {
  try {

    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${req.query.page}`);
    
    const data = await response.json();
    res.json(data);
    console.log('Received request for /api/games');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Erro ao buscar dados da API');
  }
});


app.get('/api/games/screen/individual_game', cors(), async (req, res) => {
  try {
    const response =  await fetch(`https://api.rawg.io/api/games/${req.query.id}/screenshots?key=${API_KEY}`)
    const data = await response.json();
    res.json(data)
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Erro ao buscar dados da API');
  }
})

app.get('/api/games/individual_game', cors(), async (req, res) => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games/${req.query.id}?key=${API_KEY}`)
    const data = await response.json();

    res.json(data)
  } catch (error) {
    console.error('aaaaaaaaaaa', error);
    res.status(500).send('Erro ao buscar dados da API');
  }
})
app.listen(process.env.PORT || 5000, () => {console.log('server rodando na porta')})
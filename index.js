require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cadastroCasaRoutes = require('./src/routes/cadastroCasaRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cadastroCasaRoutes);

app.get('/', (req, res) => {
  res.send('API de Geocodificação');
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
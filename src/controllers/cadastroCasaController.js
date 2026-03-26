require('dotenv').config();
const axios = require('axios');
async function geocalizarEndereco(req, res) {
  const { address } = req.body;
    try {
        const url = `https://maps.googleapis.com/maps/api/geocode/json`;
    
        const response = await axios.get(url, {
          params: {
            address: address,
            key: process.env.GOOGLE_MAPS_API_KEY,
            language: 'pt-BR',
          }
        });
    
        const data = response.data;
    
        if (data.status !== 'OK') {
          return res.status(400).json({
            error: 'Erro na geocodificação',
            details: data.status
          });
        }
    
        const result = data.results[0];
    
        const location = {
          endereco_formatado: result.formatted_address,
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng,
          tipo: result.types
        };
    
        return res.json(location);
    
      } catch (error) {
        return res.status(500).json({
          error: 'Erro interno',
          details: error.message
        });
      }
}

module.exports = {
    geocalizarEndereco
}
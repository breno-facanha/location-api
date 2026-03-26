const express = require('express');
const router = express.Router();

const cadastroCasaController = require('../controllers/cadastroCasaController');
const cadastroCasaMiddleware = require('../middlewares/cadastroCasaMiddlewares');

router.post('/geocode', cadastroCasaMiddleware.validarCampoEndereco, cadastroCasaController.geocalizarEndereco);

module.exports = router;
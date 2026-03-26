function validarCampoEndereco(req, res, next) {
    const { address } = req.body;
    console.log('Endereço recebido:', address);
    if (!address) {
      return res.status(400).json({
        error: 'Parâmetro "address" é obrigatório'
      });
    }
    next();
}

module.exports = {
    validarCampoEndereco
}
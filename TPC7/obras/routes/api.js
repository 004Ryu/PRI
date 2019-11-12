var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

/* GET home page. */
router.get('/obras', function(req, res) {
  const periodo = req.query.periodo
  const ano = req.query.anocriação
  const compositor = req.query.compositor
  if(periodo != null)
    Obras.listarP(periodo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
                  
  else if(ano != null)
    Obras.listarA(ano)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

  else if(compositor != null)
    Obras.obrasComp(compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status (500).jsonp(erro))
    
  else
    Obras.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores', function(req, res) {
  Obras.listarComps()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores/:nome', function(req,res) {
  Obras.obrasComp(req.params.nome)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;

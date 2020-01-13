const express = require('express');
const router = express.Router();

var Pubs = require('../controllers/publicacoes')

router.get('/pubs', function(req, res) {
  const type = req.query.type
  const year = req.query.year
  const autor = req.query.autor

  if(type != null && year != null)
    Pubs.listarTY(type, year)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
                  
  else if(type != null)
    Pubs.listarT(type)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))

  else if(autor != null)
    Pubs.listarA(author)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
    
  else
    Pubs.listar()
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
})

router.get('/pubs/:id', function(req,res) {
  Pubs.consultar(req.params.id)
              .then(dados => res.jsonp(dados))
              .catch(erro => res.status(500).jsonp(erro))
})

router.get('/types', function(req,res) {
  Pubs.tipos()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})

router.get('/autores', function(req,res) {
  Pubs.autores()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
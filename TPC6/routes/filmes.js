var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
  axios.get('http://localhost:4444/api/filmes')
      .then(dados => {
        res.render('lista-filmes', { lista: dados.data });
      })
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})

router.get('/:idFilme', function(req, res) {
  axios.get('http://localhost:4444/api/filmes/' + req.params.idFilme)
      .then(dados => {
        console.log(dados.data);
        res.render('filme', { filme: dados.data });
      })
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})

router.post('/', function(req, res) {
  axios.post('http://localhost:4444/api/filmes', req.body)
      .then(res.redirect('/'))
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})

router.delete('/:idFilme', function(req, res) {
  axios.delete('http://localhost:4444/api/filmes/' + req.params.idFilme)
      .then(res.redirect(303,'/filmes'))
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})

module.exports = router;
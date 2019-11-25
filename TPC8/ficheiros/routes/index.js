const express = require('express');
const router = express.Router();
const axios = require('axios')
const lhost = require('../config/env').host

/* GET home page. */
router.get('/', function(req, res) {
  axios.get(lhost + '/api/ficheiros')
    .then(dados => {
      res.render('index', {lista: dados.data});
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

router.delete('/:idFicheiro', function(req, res) {
  axios.delete('http://localhost:4444/api/ficheiros/' + req.params.idFicheiro)
      .then(res.redirect(303,'/ficheiro'))
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})

module.exports = router;
var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(dados => {
        res.render('index', { lista: dados.data });
      })
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})

router.get('/:id', function(req, res) {
  axios.all([
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'),
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/elementos?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'),
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'),
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  ])
      .then(axios.spread((base, elementos, dona, participa) =>  {
        res.render('tipologia', { tipologia: base.data, 
                                  elementos: elementos.data,
                                  dona: dona.data,
                                  participa: participa.data});
      }))
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})

router.get('/entidade/:id', function(req, res) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(dados => {
        res.render('entidade', { entidade: dados.data });
      })
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})

module.exports = router;

var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var nanoid = require("nanoid");
const myDB = __dirname + "/../data/alunos.json";

/* GET home page. */
router.get('/', function(req, res)  {
  jsonfile.readFile(myDB, (erro,alunos)=>{
    if(!erro){
        res.render('index', {pauta: alunos})
    }
    else{
        res.render('error', {error: erro})
    }
  })
})

router.get('/alunos', function(req, res)  {
  jsonfile.readFile(myDB, (erro,alunos)=>{
    if(!erro){
        res.render('index', {pauta: alunos})
    }
    else{
        res.render('error', {error: erro})
    }
  })
})

router.get('/alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  jsonfile.readFile(myDB, (erro,alunos)=> {
    if(!erro){
      var index = alunos.findIndex(c => c.id == id)
      if (index > -1){
        var aluno = alunos[index]
        res.render('notas', {aluno: aluno})
      }
    }
    else{
        res.render('error', {error: erro})
    }
  })
})

router.get('/alunos/:idAluno/notas', function(req, res) {
  var id = req.params.idAluno
  jsonfile.readFile(myDB, (erro,alunos)=> {
    if(!erro){
      var index = alunos.findIndex(c => c.id == id)
      if (index > -1){
        var aluno = alunos[index]
        res.render('notas', {aluno: aluno})
      }
    }
    else{
        res.render('error', {error: erro})
    }
  })
})

router.post('/alunos', function(req, res) {
  var registo = req.body
  registo['id'] = nanoid()
  registo['notas'] = []
  jsonfile.readFile(myDB, (erro,alunos)=>{
      if(!erro){
          alunos.push(registo)
          console.dir(alunos)
          jsonfile.writeFile(myDB, alunos, erro => {
              if(erro) console.log(erro)
              else console.log('Aluno adicionado')
              res.render('index', {pauta: alunos})
          })
      }
  })
})

router.post('/alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  var registo = req.body
  jsonfile.readFile(myDB, (erro,alunos)=>{
      if(!erro){
          var index = alunos.findIndex(c => c.id == id)
          alunos[index].notas.push(registo)
          jsonfile.writeFile(myDB, alunos, erro => {
              if(erro) console.log(erro)
              else console.log('Nota adicionada')
              var aluno = alunos[index]
              res.render('notas', {aluno: aluno})
          })
      }
  })
})

router.delete('/alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  jsonfile.readFile(myDB, (erro,alunos) => {
    if(!erro){
      var index = alunos.findIndex(c => c.id == id)
      if (index > -1){
        alunos.splice(index, 1)
        jsonfile.writeFile(myDB, alunos, erro => {
          if(erro) console.log(erro)
          else console.log('Pauta atualizada com sucesso.')
        })
      }
    }
    res.render('index', {pauta: alunos})
  })
})

router.delete('/alunos/:idAluno/notas/:idNota', function(req, res) {
  var idA = req.params.idAluno
  var idN = req.params.idNota
  jsonfile.readFile(myDB, (erro,alunos) => {
    if(!erro){
      var index = alunos.findIndex(c => c.id == idA)
      if (index > -1){
        var aluno = alunos[index]
        index = aluno.notas.findIndex(c => c.identificador == idN)
        aluno.notas.splice(index, 1)
        jsonfile.writeFile(myDB, alunos, erro => {
          if(erro) console.log(erro)
          else console.log('Notas atualizadas com sucesso.')
        })
      }
    }
    res.render('index', {pauta: alunos})
  })
})

module.exports = router;

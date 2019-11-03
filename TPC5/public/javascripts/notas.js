function notasAluno(ident){
    console.log('Apresentando notas do aluno: ' + ident)
    axios.get('/alunos/' + ident)
        .then(response => window.location.assign('/alunos/' + ident))
        .catch(error => console.log(error))
}
function apagaAluno(ident){
    console.log('Vou apagar o aluno: ' + ident)
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function apagaNota(idAl, idNota){
    console.log('Vou apagar a nota: ' + idNota)
    axios.delete('/alunos/' + idAl + '/notas/' + idNota)
        .then(response => window.location.assign('/alunos/' + idAl))
        .catch(error => console.log(error))
}
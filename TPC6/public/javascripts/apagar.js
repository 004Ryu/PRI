function apagaFilme(ident){
    console.log('Vou apagar o filme: ' + ident)
    axios.delete('/filmes/' + ident)
        .then(response => window.location.assign('/'))
        .catch(error => console.log(error))
}
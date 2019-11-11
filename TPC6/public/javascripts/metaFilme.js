function metaFilme(ident){
    console.log('Apresentando do filme: ' + ident)
    axios.get('/filmes/' + ident)
        .then(response => window.location.assign('/filmes/' + ident))
        .catch(error => console.log(error))
}
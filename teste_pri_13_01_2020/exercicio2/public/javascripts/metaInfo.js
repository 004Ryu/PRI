function metaEntidade(ident){
    console.log('Apresentando a entidade: ' + ident)
    axios.get('/api/' + ident)
        .then(response => window.location.assign('/api/entidade/' + ident))
        .catch(error => console.log(error))
}

function metaTipologia(ident){
    console.log('Apresentando a tipologia: ' + ident)
    axios.get('/api/' + ident)
        .then(response => window.location.assign('/api/' + ident))
        .catch(error => console.log(error))
}
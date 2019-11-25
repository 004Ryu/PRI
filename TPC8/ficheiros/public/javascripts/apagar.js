function apagarFicheiro(ident){
    console.log('Vou apagar o ficheiro: ' + ident)
    axios.delete('/' + ident)
        .then(response => window.location.assign('/'))
        .catch(error => console.log(error))
}
var Ficheiro = require('../models/ficheiro')
module.exports.listar = () => {
    return Ficheiro
        .find()
        .exec()
}

module.exports.apagar = id =>{
    return Ficheiro
        .deleteOne({_id: id})
        .exec()
}
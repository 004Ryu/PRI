var Obras= require('../models/obras')

module.exports.listar = () =>{
    return Obras
            .find()
            .exec()
}

module.exports.listarP = periodo =>{
    return Obras
            .find({periodo: periodo})
            .exec()
}

module.exports.listarA = ano =>{
    return Obras
            .find({anoCriacao: ano})
            .exec()
}

module.exports.listarComps = () =>{
    return Obras
            .distinct("compositor")
            .exec()
}

module.exports.obrasComp = compositor =>{
    return Obras
            .find({compositor: compositor})
            .exec()
}

module.exports.consultar = id =>{
    return Obras
            .findOne({_id: id})
            .exec()
}

module.exports.inserir = Obras =>{
    var novo = new Obras(Obras)
    return novo.save()
}

module.exports.apagar = id =>{
    return Obras
        .deleteOne({_id: id})
        .exec()
}
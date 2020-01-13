var Pubs= require('../models/publicacoes')

module.exports.listar = () =>{
    return Pubs
            .find()
            .exec()
}

module.exports.listarT = type =>{
    return Pubs
            .find({type: type})
            .exec()
}

module.exports.listarA = autor =>{
    return Pubs
            .find({autor: {$in: authors}})
            .exec()
}

module.exports.listarTY = (type , year) =>{
    return Pubs
            .find({$and: [{type: type}, {year: year}]})
            .exec()
}

module.exports.consultar = id =>{
    return Pubs
            .findOne({_id: id})
            .exec()
}

module.exports.tipos = () =>{
    return Pubs
            .distinct('type')
            .exec()
}

module.exports.autores = () =>{
    return Pubs
            .aggregate([{$unwind: '$authors'}, 
            {$project: { 
                _id: 0,
                authors: 1
            }}, 
            {$sort: {authors: 1}}])
            .exec()
}
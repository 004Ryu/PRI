const mongoose = require('mongoose')

var publicacaoSchema = new mongoose.Schema({
    type: String,
    id: String,
    authors: Array,
    editors: Array,
    title: String,
    chapter: String,
    pages: String,
    booktitle: String,
    address: String,
    year: String,
    month: String,
    doi: String
})

module.exports = mongoose.model('publicacoes', publicacaoSchema);
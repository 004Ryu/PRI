const mongoose = require('mongoose')

var filmeSchema = new mongoose.Schema({
    title: String,
    year: String,
    cast: Array,
    genres: Array
})

module.exports = mongoose.model('filme', filmeSchema);
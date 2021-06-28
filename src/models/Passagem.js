//Schema - Passagens

const mongoose = require('mongoose')

const passagemSchema = mongoose.Schema({
    origem: {
        type: String,
        required: true
    },

    destino: {
        type: String,
        required: true
    },

    preço: {
        type: Number,
        required: true
    },
    
    disponibilidade:{
        type: Boolean,
        default: true,
    }
})

module.exports = mongoose.model('Passagem', passagemSchema)
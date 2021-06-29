//Schema - Lista de compras

const mongoose = require('mongoose')

const compraSchema = mongoose.Schema({
    nome:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    },
    passagem: [{
        type: mongoose.Types.ObjectId,
        ref:'Passagem'
    }],
    pagamento: {
        cartão: {
            numero:{
            type: String,
            required: true
            }
        }
    }
})

module.exports = mongoose.model('Compra', compraSchema)
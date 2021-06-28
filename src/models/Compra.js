//Schema - Carrinho de compras

const mongoose = require('mongoose')

const compraSchema = mongoose.Schema({
    passagem: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }],
    valor: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    pagamento: {
        cartão: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('Compra', compraSchema)
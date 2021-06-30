//Schema - Lista de compras

const mongoose = require('mongoose')

const compraSchema = mongoose.Schema({
    passagem: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Passagem'
    }],
    nome:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
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
const { response } = require('express')
const Compra = require('../models/Compra')

module.exports = {
    async index(request, response){
        try{
            const compras = await Compra.find()
            return response.status(200).json({compras})
        }   catch(error){
            response.status(500).json({error: err.message})
        }
    },

    async store(request, response){
        const {passagem, valor, pagamento} = request.body
        if(!passagem || !valor){
            return response.status(400).json({error: 'Nenhuma passagem comprada!'})
        }

        const compra = new Compra({
           passagem,
           valor,
           pagamento,
        })

        try{
            await compra.save()
            return response.status(201).json({message: 'Compra finalizada com sucesso'})
        } catch(error){
            response.status(400).json({error: error.message})
        }
    },
}
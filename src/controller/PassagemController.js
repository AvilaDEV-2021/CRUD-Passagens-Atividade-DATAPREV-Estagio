const { response } = require('express')
const Passagem = require('../models/Passagem')

module.exports = {
    async index(request, response){
        try{
            const passagens = await Passagem.find()
            return response.status(200).json({passagens})
        }   catch(error){
            response.status(500).json({error: err.message})
        }
    },

    async store(request, response){
        const {origem, preço, destino} = request.body
        if(!origem || !preço || !destino){
            return response.status(400).json({error: 'Faltando origem ou preço'})
        }

        const passagem = new Passagem({
           origem,
           destino,
           preço,
           disponibilidade: true,
        })

        try{
            await passagem.save()
            return response.status(201).json({message: 'Passagem criada com sucesso'})
        } catch(error){
            response.status(400).json({error: error.message})
        }
    },
}
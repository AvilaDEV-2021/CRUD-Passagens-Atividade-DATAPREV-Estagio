const { response } = require('express')
const Usuario = require('../models/Usuario')

module.exports = {
    async index(request, response){
        try{
            const usuarios = await Usuario.find()
            return response.status(200).json({usuarios})
        }   catch(error){
            response.status(500).json({error: err.message})
        }
    },

    async store(request, response){
        const {nome, email} = request.body
        if(nome || !email){
            return response.status(400).json({error: 'Nenhum dado encontrado'})
        }

        const usuario = new Usuario({
           nome,
           email,
        })

        try{
            await Usuario.save()
            return response.status(201).json({message: 'Usuario cadastrado com sucesso'})
        } catch(error){
            response.status(400).json({error: error.message})
        }
    },
}
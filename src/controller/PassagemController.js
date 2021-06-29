const { response } = require('express')
const Passagem = require('../models/Passagem')

const  PassagemController = {

    async criarPassagem(require, response){
        const bodyPassagem = require.body
        try{
            const newPassagem = await Passagem.create(bodyPassagem)
            return response.status(201).json(newPassagem)
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async mostrarPassagem(require, response){
        try{
           const passagens = await Passagem.find()
           return response.status(201).json({passagens})
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async mostrar_idPassagem(require, response){
        const {passagem_id} = require.params
        try{
            const passagem = await Passagem.findById(passagem_id)
            return response.status(201).json({passagem})
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async alterarPassagem(require, response){
        const bodyAlterar = require.body
        const {passagem_id} = require.params
        try{
            const uptadedPassagem = await Passagem.findByIdAndUpdate(passagem_id, bodyAlterar, {new: true})
            return response.status(201).json(uptadedPassagem)
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async deletarPassagem(require, response){
        const{passagem_id} = require.params
        try{
            const deletaPassagem = await Passagem.findByIdAndDelete(passagem_id)
            return response.status(201).json(deletaPassagem)
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    }
}

module.exports = PassagemController
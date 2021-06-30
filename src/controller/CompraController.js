const { response } = require('express')
const Compra = require('../models/Compra')

const  CompraController = {

    async criarCompra(require, response){
        const bodyCompra = require.body
        const {usuario_id} = require.params
        try{
            const newCompra = await Compra.create({...bodyCompra, nome: usuario_id})
            await newCompra.populate('passagem').execPopulate()
            return response.status(201).json(newCompra)
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async mostrar_idCompra(require, response){
        const {usuario_id} = require.params
        try{
           const passagem = await Compra.find({nome: usuario_id})
           return response.status(201).json(passagem)
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async mostrarCompra(require, response){
        const {usuario_id, compra_id} = require.params
        try{
           const compras = await Compra.findById(compra_id)
           return response.status(201).json({compras})
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
}

module.exports = CompraController
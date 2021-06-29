const { response } = require('express')
const Compra = require('../models/Compra')

const  CompraController = {

    async criarCompra(require, response){
        const compra = require.body
        try{
            const compras = await Compra.create(compra)
            return response.status(201).json({message:'Compra adicionada ao carrinho'})
        }catch(error){
            return response.status(500).json(compras)
        }
    },
    async mostrarCompra(require, response){
        const{usuario_id, compra_id} = require.params
        try{
           const carts = await Compra.findById(compra_id)
           return response.status(201).json({carts})
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
}

module.exports = CompraController
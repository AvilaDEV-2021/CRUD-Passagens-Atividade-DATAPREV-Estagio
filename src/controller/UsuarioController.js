const { response } = require('express')
const Usuario = require('../models/Usuario')

const  UsuarioController = {

    async criarUsuario(require, response){
        const bodyUsuario = require.body
        try{
            const newUsuario = await Usuario.create(bodyUsuario)
            return response.status(200).json(newUsuario)
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async mostrarUsuario(require, response){
        try{
           const usuarios = await Usuario.find()
           return response.status(200).json({usuarios})
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async mostrar_idUsuario(require, response){
        const {usuario_id} = require.params
        try{
            const usuario = await Usuario.findById(usuario_id)
            return response.status(200).json({usuario})
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    },
    async deletarUsuario(require, response){
        const{usuario_id} = require.params
        try{
            const deletaUsuario = await Usuario.findByIdAndDelete(usuario_id)
            return response.status(201).json(deletaUsuario)
        }catch(error){
            return response.status(500).json({error: error.message})
        }
    }
}

module.exports = UsuarioController
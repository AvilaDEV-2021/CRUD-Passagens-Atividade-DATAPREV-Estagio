//Rotas 
const express = require('express')
const UsuarioController = require('../controller/UsuarioController')
const PassagemController = require('../controller/PassagemController')
const CompraController = require('../controller/CompraController')

const router = express.Router()

router.post('/usuario', UsuarioController.criarUsuario)
router.get('/usuario', UsuarioController.mostrarUsuario)
router.get('/usuario/:usuario_id', UsuarioController.mostrar_idUsuario)
router.delete('/usuario/:usuario_id', UsuarioController.deletarUsuario)

router.post('/', PassagemController.criarPassagem)
router.get('/', PassagemController.mostrarPassagem)
router.get('/:passagem_id', PassagemController.mostrar_idPassagem)
router.patch('/:passagem_id', PassagemController.alterarPassagem)
router.delete('/:passagem_id', PassagemController.deletarPassagem)


router.post('/compra/:usuario_id', CompraController.criarCompra)
router.get('/compra/:usuario_id', CompraController.mostrar_idCompra)
router.get('/compra/:usuario_id/:compra_id', CompraController.mostrarCompra)
//router.get('/compra/:compra_id', CompraController.index)

module.exports = router
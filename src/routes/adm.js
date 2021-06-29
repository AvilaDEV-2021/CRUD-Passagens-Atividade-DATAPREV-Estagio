//Rotas 
const express = require('express')
const CompraController = require('../controller/CompraController')
const PassagemController = require('../controller/PassagemController')
const UsuarioController = require('../controller/UsuarioController')
const router = express.Router()

router.post('/usuario', UsuarioController.store)
router.get('/usuario', UsuarioController.index)


router.post('/', PassagemController.store)
router.get('/', PassagemController.index)
router.get('/:passagem_id', PassagemController.index)


router.post('/compra', CompraController.store)
router.get('/compra', CompraController.index)
router.get('/:compra_id', CompraController.index)

module.exports = router
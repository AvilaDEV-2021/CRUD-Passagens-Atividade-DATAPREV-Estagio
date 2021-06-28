//Rotas 
const express = require('express')
const CompraController = require('../controller/CompraController')
const router = express.Router()

const PassagemController = require('../controller/PassagemController')

router.get('/', PassagemController.index)
router.post('/', PassagemController.store)
router.get('/compra', CompraController.index)
router.post('/compra', CompraController.store)

/*router.get('/', (req,res) => {
    res.send('<h1>Gerenciador de passagens</h1>')
})*/

module.exports = router
//Módulos

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const connectToDatabase = require('../src/models/connection')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

connectToDatabase()

//Importando Rotas

const admRoute = require('./routes/adm')
app.use('/adm', admRoute)

//Rota principal
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/visual/index.html')
})

//Porta
const port = 3000
app.listen(port, () => {
    console.log('Backend iniciado em localhost:3000')
})
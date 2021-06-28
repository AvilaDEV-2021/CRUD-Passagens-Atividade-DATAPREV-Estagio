//Conectando com o banco de dados usando o mongoose

const mongoose = require('mongoose')

function connectToDatabase(){mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
    const db = mongoose.connection
    db.on('error', () => {
    console.error(error)
    })
    db.once('open', () => {
    console.log('Conectado ao banco de dados!')
})
}

module.exports = connectToDatabase





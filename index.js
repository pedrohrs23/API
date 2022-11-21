/* ARQUIVO RESPONSAVEL PELO SERVIDOR */

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

/* server.listen(3000, () => {
    console.log('Servidor está funcionando...')
}); */

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(21262, () => {
    console.log('Servidor está funcionando... http://localhost:21262')
})


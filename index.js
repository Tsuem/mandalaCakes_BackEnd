const Contenedor = require('./contenedor.js')
const express = require('express')

const app = express()
const PORT = 8080
const products = new Contenedor('./products.txt')

app.get('/', (req, res) => {
    res.send(`Bienvenido a Mandala Cakes`)
})

app.get('/productos', async (req, res) => {
    res.send(await products.getAll())
})

app.get('/productosRandom', async (req, res) => {
    res.send(await products.getRandom())
})

const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${server.address().port}`);
})
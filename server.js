const express = require('express')
const Contenedor = require('./Contenedor.js')
const app = express()
const productos = new Contenedor('./productos.json')
const PORT = 8080 || process.env.PORT

app.get("/", (req, res) => {
  res.send(`<h1 style='color:blue'>Escribir en la barra: "/productos"</h1>`);
});

app.get('/productos', async (req, res) => {
  const prods = await productos.getAll()
  res.send(prods)
})

app.get('/productoRandom', async (req, res) => {
  const prods = await productos.getAll()
  const aleatorio = parseInt(Math.random()*prods.length)
  res.send(prods[aleatorio])
})

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))


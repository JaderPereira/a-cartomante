const express = require('express')   //pegando o express q eu baixei
const app = express()                //variavel q vai portar o express
const routes = require('./routes')
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

//falando pro nosso servidor usar o views para renderizar um html
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

const fetch = require("node-fetch")

setInterval(() => {
  fetch("https://a-cartomante.onrender.com")
    .then(() => console.log("Ping enviado!"))
    .catch(err => console.error("Erro ao pingar:", err))
}, 300000) // A cada 5 minutos


app.listen(PORT, () => {
    console.log(`acessar: http://localhost:${PORT}`)
    console.log(`Servidor executando na porta ${PORT}`)
})

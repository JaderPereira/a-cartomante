const express = require('express')   //pegando o express q eu baixei
const route = express.Router()
const path = require('path')
const home = require('./src/controllers/home')

route.get('/', home.paginaInicial)


module.exports = route

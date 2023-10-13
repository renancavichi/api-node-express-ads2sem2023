// const express = require('express')
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {PORT} from './config.js'
import logger from './middlewares/logger.js'

import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'

const api = express()

// Middlewares
api.use(logger)
api.use(bodyParser.json())
api.use(cors())

api.get('/', (req, res)=>{   
    res.json({message: "Bem-vindo a API"})
})

api.use('/user', userRoute)
api.use('/product', productRoute) 

api.post('/whoiam', (req, res) => {
    res.json({ headers: req.headers, ip: req.ip, hostname: req.hostname, subdomains: req.subdomains })
})

api.all('*', (req, res)=>{
    res.status(404).json({message: "Rota não encontrada!"})
})

api.post('/worker-test', (req, res)=>{
    console.log(req.body)
    res.json({message: "Rota de teste"})
})

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
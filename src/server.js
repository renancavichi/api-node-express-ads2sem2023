// const express = require('express')
import express from 'express'
import userRoute from './router/userRoute.js'

import {PORT} from './config.js'

const api = express()

api.get('/', (req, res)=>{   
    res.json({message: "Bem-vindo a API"})
})

api.use('/user', userRoute) 

api.all('*', (req, res)=>{
    res.status(404).json({message: "Rota não encontrada!"})
})

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
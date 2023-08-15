import express from 'express'
import listUsers from '../controllers/user/listUsers.js'
import getUser from '../controllers/user/getUser.js'

const router = express.Router()

router.get('/', getUser)
router.get('/list', listUsers)

router.post('/', (req, res)=>{
    //Create
    const dados = req.body

    res.json({
        message: "Usuário criado com sucesso",
        dados: dados
    })
})

router.put('/', (req, res)=>{
    //Update
    const dados = req.body

    res.json({
        message: "Usuário atualizado com sucesso",
        dados: dados
    })
})

router.delete('/', (req, res)=>{
    //Apagar
    res.json({message: "Usuário apagado com sucesso"})
})

export default router
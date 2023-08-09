import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{   
    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "José"},
    ]
    res.json(users)
})

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
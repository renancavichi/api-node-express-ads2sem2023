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
    res.json({message: "Usuário criado com sucesso"})
})

router.put('/', (req, res)=>{
    //Update
    res.json({message: "Usuário atualizado com sucesso"})
})

router.delete('/', (req, res)=>{
    //Apagar
    res.json({message: "Usuário apagado com sucesso"})
})

export default router
import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{   
    const users = [
        {id: 1, name: "PC da Nasa"},
        {id: 2, name: "Mouse"},
        {id: 3, name: "Teclado"},
    ]
    res.json(users)
})

router.post('/', (req, res)=>{
    //Create
    res.json({message: "Produto criado com sucesso"})
})

router.put('/', (req, res)=>{
    //Update
    res.json({message: "Produto atualizado com sucesso"})
})

router.delete('/', (req, res)=>{
    //Apagar
    res.json({message: "Produto apagado com sucesso"})
})

export default router
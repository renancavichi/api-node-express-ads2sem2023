import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{   
    const users = 
        {id: 1, name: "PC da Nasa"}
    res.json(users)
})

router.post('/', (req, res)=>{
    //Create
    const dados = req.body

    res.json({
        message: "Produto criado com sucesso",
        dados: dados
    })
})

router.put('/', (req, res)=>{
    //Update
    const dados = req.body

    res.json({
        message: "Produto atualizado com sucesso",
        dados: dados
    })
})

router.delete('/', (req, res)=>{
    //Apagar
    res.json({message: "Produto apagado com sucesso"})
})

export default router
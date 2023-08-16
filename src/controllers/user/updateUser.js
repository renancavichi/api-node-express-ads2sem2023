const updateUser = (req, res)=>{
    const dados = req.body

    res.json({
        message: "Usuário atualizado com sucesso",
        dados: dados
    })
}

export default updateUser
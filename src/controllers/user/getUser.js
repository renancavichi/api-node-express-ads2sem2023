const getUser = (req, res)=>{   
    const users = {id: 2, name: "Maria"}
    res.json(users)
}

export default getUser
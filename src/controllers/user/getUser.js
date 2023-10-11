import user from '../../models/userModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const getUser = async (req, res)=>{   
    try {
        const userValidated = user.validadeIdUser(req.body)
        if(userValidated.success === false){
            const zodError = zodErrorParser(userValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }
        const [rows, fields] = await user.get(userValidated.data.id)
        if (rows.length === 0) {
            res.status(404).json({message: 'User not found'})
        } else {
            delete rows[0].pass
            res.json(rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default getUser
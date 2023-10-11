import user from '../../models/userModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const deleteUser = async (req, res)=>{
    try{
        const userValidated = user.validadeIdUser(req.body)
        if(userValidated.success === false){
            const zodError = zodErrorParser(userValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }
        const [result] = await user.remove(userValidated.data.id)
        if(result.affectedRows === 1) {
            res.status(200).json({success: `User id: ${userValidated.data.id} Deleted Successfully!`})
        }else{
            res.status(404).json({error: `User id: ${userValidated.data.id} Not Found!`})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'Server Error'})
    }
}

export default deleteUser
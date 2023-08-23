import user from '../../models/userModel.js' 

const deleteUser = async (req, res)=>{
    try{
        const id = req.body.id
        const [result] = await user.remove(id)
        if(result.affectedRows === 1) {
            res.status(200).json({message: `User id: ${id} Deleted Successfully!`})
        }else{
            res.status(404).json({message: `User id: ${id} Not Found!`})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
}

export default deleteUser
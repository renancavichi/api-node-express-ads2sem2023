import user from "../../models/userModel.js"

const updateUser = async (req, res)=>{
    try{
        const [result] = await user.update(req.body)
        if(result.affectedRows === 1) {
            res.status(200).json({
                success: `User id: ${req.body.id} Updated Successfully!`,
                user: {...req.body}
            })
        }else{
            res.status(404).json({error: `User id: ${req.body.id} Not Found!`})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'Server Error'})
    }
}

export default updateUser
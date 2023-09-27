import user from '../../models/userModel.js'

const createUser = async (req, res) => {
    try{
        const [result] = await user.create(req.body)
        if(result.affectedRows === 1) {

            const newUser = req.body
            delete newUser.pass
            res.status(201).json({
                success: 'User Created',
                user:{
                    id: result.insertId,
                    ...newUser
                }
            })
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'Server Error'})
    }
}

export default createUser
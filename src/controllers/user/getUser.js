import user from '../../models/userModel.js'

const getUser = async (req, res)=>{   
    try {
        const [rows, fields] = await user.get(req.body.id)
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
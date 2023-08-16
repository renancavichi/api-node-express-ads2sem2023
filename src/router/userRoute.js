import express from 'express'
import listUsers from '../controllers/user/listUsers.js'
import getUser from '../controllers/user/getUser.js'
import createUser from '../controllers/user/createUser.js'
import updateUser from '../controllers/user/updateUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.get('/', getUser)
router.get('/list', listUsers)
router.post('/', createUser)
router.put('/', updateUser)
router.delete('/', deleteUser)

export default router
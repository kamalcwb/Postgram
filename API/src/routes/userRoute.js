import { Router } from 'express'
import { getUser, createUser, loginUser, deleteUser } from '../controllers/user.controller.js'
import auth from '../../middleware/auth.js'

const router = Router()

router.post('/users/register', createUser)
router.post('/users/login', loginUser)
router.get('/users/:id', getUser, auth)
router.get('/users', getUser, auth)
router.delete('/users/:id', deleteUser, auth)


export default router;

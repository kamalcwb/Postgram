import { Router } from 'express'
import { getUser, createUser, loginUser, deleteUser } from '../controllers/user.controller.js'

const router = Router()


router.get('/users/:id', getUser)
router.get('/users', getUser)
router.post('/users/register', createUser)
router.post('/users/login', loginUser)
router.delete('/users/:id', deleteUser)


export default router;

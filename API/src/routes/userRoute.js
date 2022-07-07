import { Router } from 'express'
import { getUser, createUser, loginUser, deleteUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/users', getUser)
router.post('/users', createUser)
router.post('/login', loginUser)
router.delete('/users/:id', deleteUser)


export default router;

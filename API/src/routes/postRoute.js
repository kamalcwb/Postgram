import { Router } from 'express'
import { getPost, createPost, deletePost } from '../controllers/post.controller.js';
import auth from '../../middleware/auth.js'

const router = Router()

router.get('/posts/getposts', getPost)
router.post('/posts/newpost', createPost, auth)
router.delete('/posts/:id', deletePost, auth)

export default router;
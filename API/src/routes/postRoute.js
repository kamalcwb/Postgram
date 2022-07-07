import { Router } from 'express'
import { getPost, createPost, deletePost } from '../controllers/post.controller.js';

const router = Router()

router.get('/posts', getPost)
router.post('/posts', createPost)
router.delete('/posts/:id', deletePost)

export default router;
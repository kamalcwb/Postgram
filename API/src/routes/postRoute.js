import { Router } from 'express'
import { getPost, createPost, deletePost } from '../controllers/post.controller.js';

const router = Router()

router.get('/posts/getposts', getPost)
router.post('/posts/newpost', createPost)
router.delete('/posts/:id', deletePost)

export default router;
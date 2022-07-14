import { v4 as uuid } from 'uuid'
import { getConnection } from '../database.js'

export const getPost = (req, res) => {
    const db = getConnection()
    res.json(db.data.posts)
}

export const createPost = async (req, res) => {
    const newPost = {
        id: uuid(),
        username: req.body.username,
        msg: req.body.msg
    }
    try {
        const db = getConnection()
        db.data.posts.unshift(newPost)
        await db.write()

        res.json(newPost)
    } catch (err) {
        return (res.status(500).send(err))
    }

}

export const deletePost = async (req, res) => {

    const db = getConnection()

    const msgFind = db.data.posts.find((p) => p.id === req.params.id)
    if (!msgFind) return res.sendStatus(404)

    const newMsg = db.data.posts.filter(p => p.id !== req.params.id)
    db.data.posts = newMsg

    await db.write()

    res.json(msgFind)
}
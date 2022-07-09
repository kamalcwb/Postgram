import { Router } from 'express'
import { v4 as uuid } from 'uuid'
import { getConnection } from '../database.js'
const router = Router()

export const createUser = async (req, res) => {
    const newUser = {
        id: uuid(),
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10)
        // password: await bcrypt.hash(req.body.password, 10)
    }
    try {
        const db = getConnection()
        db.data.users.unshift(newUser)
        await db.write()

        res.json(newUser)
    } catch (err) {
        return (res.status(500).send(err))
    }
}


export default router;
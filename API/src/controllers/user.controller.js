import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getConnection } from '../database.js'



export const getUser = (req, res) => {
    const db = getConnection()
    res.json(db.data.users)
}

export const createUser = async (req, res) => {
    const newUser = {
        id: uuid(),
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10)
    }
    try {
        const db = getConnection()
        db.data.users.push(newUser)
        await db.write()

        res.json(newUser)
    } catch (err) {
        return (res.status(500).send(err))
    }

}

export const loginUser = async (req, res) => {
    const db = getConnection()
    const user = db.data.users.find(user => user.username === req.body.username)
    if (user == null) {
        return res.status(404).send('Usuario não encontrado.')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SEC, { expiresIn: "7d" })
            return res.json({ auth: true, token })
        }
    } catch (err) {
        return (res.status(500).send(err))
    }

}

export const deleteUser = async (req, res) => {

    const db = getConnection()

    const userFind = db.data.users.find((p) => p.id === req.params.id)
    if (!userFind) return res.sendStatus(404)

    const newUser = db.data.users.filter(p => p.id !== req.params.id)
    db.data.users = newUser

    await db.write()

    res.json(userFind)
}
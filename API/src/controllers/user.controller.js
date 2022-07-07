import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'
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
    const user = db.data.users.find((u) => u.username === req.params.username)
    if (!user) return res.sendStatus(404)

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const match = await bcrypt.compare(password, user.passwordHash);

            if (match) {
                res.send('logou com sucesso')
            }
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
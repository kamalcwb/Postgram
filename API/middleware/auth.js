import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_SEC)
        req.user = decode
        next()
    } catch (err) {
        return res.status(401).send({ mensagem: 'falha na verificação do Token.' })
    }

}

export default auth;


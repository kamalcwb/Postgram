export default function errorHandler(Error, req, res, next) {
    res.status(Error.status || 500)
    res.send({ "error": true, "message": Error.message || "Erro no servidor" })
}

// module.exports = errorHandler
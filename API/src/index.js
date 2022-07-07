import app from './app.js'
import { createConnection } from './database.js'


createConnection()
app.listen(5000)
console.log('Servidor online na porta 5000')
import 'dotenv/config'
import express from 'express'
import postRoute from './routes/postRoute.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'
import session from 'express-session'



const app = express()
app.use(express.json())

app.use(session({
    secret: 'sesionkey',
    resave: false,
    saveUninitialized: true
}))

app.use(cors())
app.use(userRoute);
app.use(postRoute);

export default app
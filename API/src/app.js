import express from 'express'
import postRoute from './routes/postRoute.js'
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'
import cors from 'cors'


const app = express()
app.use(express.json())


app.use(cors())
app.use(authRoute);
app.use(userRoute);
app.use(postRoute);

export default app
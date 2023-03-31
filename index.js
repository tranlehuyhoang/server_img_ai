import cors from 'cors'
import express from 'express'
import postRouter from './router/postRouter.js'
import dalleRoutes from './router/dalleRoutes.js'
import connectDB from './router/connect.js'

const app = express();
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.get('/', async (req, res) => {
    res.send('hello ae')
})
try {
    connectDB('mongodb+srv://2509roblox:2509roblox@cluster0.20ubkl5.mongodb.net/?retryWrites=true&w=majority')
    console.log('connet')
} catch (error) {
    console.log(error)
}
app.use('/api/v1/post', postRouter)
app.use('/api/v1/dalle', dalleRoutes)
app.listen(8080, () => {
    console.log('run server  8080')
})
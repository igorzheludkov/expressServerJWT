import 'dotenv/config'
import express, { json } from 'express'
import { connect } from 'mongoose'
import authRouter from './authRouter.js'
const PORT = process.env.PORT || 5000

const app = express()

app.use(json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await connect(
      'mongodb+srv://500griven:yEom4LYhZBYPYMVd@cluster0.dydcbek.mongodb.net/?retryWrites=true&w=majority'
    )
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()

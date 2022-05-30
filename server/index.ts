import express from 'express'
import bodyParser, {OptionsJson} from 'body-parser'
import mongoose, {ConnectOptions} from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts'

const app = express()
app.use(bodyParser.json({limit: "30mb", extended: true} as OptionsJson))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use('/posts', postRoutes)


const CONNECTION_URL = "mongodb+srv://ts-memories:10086yyr@cluster0.zhnko.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions)
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message))


import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import search from './routes/router'

const app = express()

app.use(express.static(path.join(__dirname, 'views')))

app.use(search)


app.listen(process.env.PORT)
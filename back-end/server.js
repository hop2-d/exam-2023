const express = require('express')
const app = express()
const cors = require('cors')
const connect = require('./config/database')
const { listRoute } = require('./routes/list.routes')
require('dotenv').config()

const port = process.env.PORT || 4000

connect()

app.use(cors())
app.use(express.json())

app.use(listRoute)

app.listen(port, () => {
    console.log('App is listening on port :', port)
})

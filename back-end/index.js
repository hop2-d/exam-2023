const express = require('express')
const cors = require('cors')
const connect = require('./helpers/connect')
const port = 4000
const { TaskRoutes } = require("./routes/task.routes")

const app = express()
app.use(cors())
app.use(express.json())

connect()

app.use(TaskRoutes)

app.get("/", ( req, res) => {
    res.send("Todo list backend").status(201)
})
app.get("/test", ( req, res) => {
    res.send("This is test endpoint").status(201)
})
app.listen(port, () => {
    console.log('App is listening on port :', port)
})

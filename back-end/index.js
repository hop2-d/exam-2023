const express = require('express')
const connect = require('./config')
const { taskrouter } = require('./routes/task.route')
app = express()
connect()


app.use(express.json());

app.get("/", (_req, res) => {
    res.send("hi")
})
app.use(taskrouter)

app.listen(5000)
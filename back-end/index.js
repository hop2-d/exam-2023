const express = require("express");
const cors = require("cors");
const connect = require("./database/server")
require("dotenv").config();

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.use("/", require("./router/router"))
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`))

connect()
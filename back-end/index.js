const express = require("express");
const connect = require("./common/config/db");
const cors = require("cors");
const { taskRouter } = require("./routes/taskRouter");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

connect();

app.use(taskRouter);
 
app.get('/', (req, res) => {
    res.send('Todo list backend')
})

app.get('/test', (req, res) => {
    res.send('This is test endpoint')
})

app.listen(port, () => {
    console.log('Server running at:', port)
})
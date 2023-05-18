require("dotenv").config({})
const express=require("express"),cors=require("cors");
const { connect } = require("./config/db");
const { TodoRouter } = require("./routes/todoRoutes");

const port=process.env.PORT||3100

const app=express().use(cors(),express.json(),TodoRouter);

app.get("/",(req,res)=>{
    res.send(`Todo list backend`);
})

app.listen(port,()=>{
    console.clear()
    connect()
    console.log(`local: \x1b[33mhttp://localhost:${port}\n\x1b[0mPort : \x1b[33m${port}`)
})
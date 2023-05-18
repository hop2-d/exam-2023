const express=require("express");

const cors=require("cors");

require("dotenv").config();

const app=express();

const port=process.env.PORT || 8080;

const mongoose=require("mongoose");

mongoose.set('strictQuery', false);

const connect=require("./mongoDb/dbConnector");

connect();

app.use(cors());

app.use(express.json())

//router
    const todoRouter=require("./routers/todo.router")
//

app.use("/",todoRouter);

app.get("/" , (req,res)=>{
    res.send("Todo list backend")
})

app.get("/test" , (req,res)=>{
    res.send("Todo list backend")
})

app.listen(port,()=>{
    console.log("Server running at :",port)
})
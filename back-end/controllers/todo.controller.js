const { Todo } = require("../models/todo.module")

exports.getList=async(req,res)=>{
    try{
        const lists=await Todo.find({});

        res.status(200).json(lists)
    }catch(err){
        res.send(err);
    }
}

exports.showIsDone=async(req,res)=>{
    try{
        const lists=await Todo.find({});

        const isDoneLists=lists.filter(list=>list.isDone==true);

        res.status(200).json(isDoneLists.length);
    }catch(err){
        res.send(err);
    }
}

exports.addList=async(req,res)=>{
    const {text}=req.body;

    try{
        const newPost=await Todo.create({
            text:text,
        });

        res.status(200).json(newPost);
    }catch(err){
        res.send(err);
    }
}

exports.deleteById=async(req,res)=>{
    const id=req.params.id;

    try{
        const deletePost=await Todo.findByIdAndDelete(id);

        res.status(200).send(deletePost)
    }catch(err){
        res.send(err);
    }
}

exports.updatePost=async(req,res)=>{
    const id=req.params.id;

    const {updateText}=req.body;

    try{
       const post=await Todo.findById(id);

       post.text=updateText;

       await post.save();

       res.send(post)
    }catch(err){
        res.send(err);
    }
}

exports.toggleIsDone=async(req,res)=>{
    const id=req.params.id;

    try{
        const post=await Todo.findById(id);

        post.isDone=!post.isDone;

        await post.save();

        res.send("Changed boolean")
    }catch(err){
        res.send(err);
    }
}
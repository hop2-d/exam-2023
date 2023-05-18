const {Router}=require("express");

const {
    getList,
    showIsDone,
    addList,
    deleteById,
    updatePost,
    toggleIsDone
}=require("../controllers/todo.controller");

const todoRouter=Router();

todoRouter
    .get("/list",getList)
    .get("/count",showIsDone)
    .post("/add", addList)
    .delete("/delete/:id",deleteById)
    .patch("/update/:id",updatePost)
    .patch("/checked/:id",toggleIsDone)
module.exports=todoRouter;
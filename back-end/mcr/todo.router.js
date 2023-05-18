const express = require("express");
const {
  base,
  base2,
  add,
  list,
  count,
  deletetodo,
  patchtodo,
  patchtododone,
} = require("./todo.controller");
const todorouter = express.Router();

todorouter
  .get("/", base)
  .get("/test", base2)
  .post("/add", add)
  .get("/list", list)
  .get("/count", count)
  .delete("/delete", deletetodo)
  .patch("/update", patchtodo)
  .patch("/checked", patchtododone);

module.exports = todorouter;

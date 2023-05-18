const { Router } = require("express");
const { taskController } = require("../controllers");

const router = Router();

router
  .get("/list", taskController.getList)
  .post("/add", taskController.addTask)
  .delete("/delete/:id", taskController.deleteTask)
  .patch("/update/:id", taskController.updateTask)
  .patch("/checked/:id", taskController.check)

module.exports = router;

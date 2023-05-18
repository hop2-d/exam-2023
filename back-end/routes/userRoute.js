const { Router } = require("express");
const router = express.Router();
const { roleMiddleware } = require("../middleWares/roleMIDleware");
const {
  signup,
  login,
  getUsers,
  changeUserRole,
} = require("../controllers/userController");

const route = Router()
  .post("/signup", signup)
  .get("/login", login)
  .get("/Users", roleMiddleware, getUsers)
  .put("/UpdateRole", roleMiddleware, changeUserRole);

exports.userRoute = route;

router
  .get("/list", getAllLists)
  .get("/count", getIsDone)
  .post("/add", createTodo)
  .patch("/update/:id", updateTodo)
  .patch("/checked/:id", checkTodo)
  .delete("/delete", deleteTodo);

exports.todoRoutes = router;

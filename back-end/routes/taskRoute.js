const {Router} = require("express");

const {getList, Count ,Add ,Delete ,Update, Checked} = require("../controllers/taskController")

const router = Router();

exports.taskRouter = router

.get("/list", getList)
.get("/count", Count)
.post("/add", Add)
.delete("/delete/:id", Delete)
.patch("/update/:id", Update)
.patch("/checked/:id", Checked)
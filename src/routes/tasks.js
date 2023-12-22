const deleteTask = require("../controllers/tasks/deleteTask");
const editTask = require("../controllers/tasks/editTask");
const getTask = require("../controllers/tasks/getTask");
const postTask = require("../controllers/tasks/postTask");
const updateTaskStatus = require("../controllers/tasks/updateTaskStatus");


const router = require("express").Router();

router.get("/api/task", getTask);

router.post("/api/task", postTask);

router.patch('/api/task/update-order-status', updateTaskStatus);

router.put("/api/task/edit", editTask);

router.delete("/api/task", deleteTask);





module.exports = router;
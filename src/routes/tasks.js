const getTask = require("../controllers/tasks/getTask");
const postTask = require("../controllers/tasks/postTask");
const updateTaskStatus = require("../controllers/tasks/updateTaskStatus");


const router = require("express").Router();

router.get("/api/task", getTask);

router.post("/api/task", postTask);

router.patch('/api/task/update-order-status', updateTaskStatus);





module.exports = router;
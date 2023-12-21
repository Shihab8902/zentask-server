const taskCollection = require("../../models/taskModel");

const postTask = async (req, res) => {
    try {
        const task = req.body;
        const newTask = taskCollection(task);
        const result = await newTask.save();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = postTask;
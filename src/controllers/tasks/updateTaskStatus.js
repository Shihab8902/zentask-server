const taskCollection = require("../../models/taskModel");

const updateTaskStatus = async (req, res) => {
    const { taskId, order, status } = req.body;


    try {
        await taskCollection.findByIdAndUpdate(taskId, { order, status });

        res.send({ message: "success" });

    } catch (error) {
        console.log(error);
    }
}


module.exports = updateTaskStatus;
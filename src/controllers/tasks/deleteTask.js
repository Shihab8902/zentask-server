const { default: mongoose } = require("mongoose");
const taskCollection = require("../../models/taskModel");

const deleteTask = async (req, res) => {
    try {
        const id = req.query.id;
        const filter = { _id: new mongoose.Types.ObjectId(id) };
        const result = await taskCollection.deleteOne(filter);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = deleteTask;
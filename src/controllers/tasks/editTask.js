const { default: mongoose } = require("mongoose");
const taskCollection = require("../../models/taskModel");

const editTask = async (req, res) => {
    try {
        const id = req.query.id;
        const data = req.body;

        const newDoc = {
            $set: {
                title: data?.title,
                priority: data?.priority,
                deadline: data?.deadline,
                description: data?.description
            }
        }
        const filter = { _id: new mongoose.Types.ObjectId(id) };
        const result = await taskCollection.updateOne(filter, newDoc);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = editTask;
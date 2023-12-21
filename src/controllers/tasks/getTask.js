const taskCollection = require("../../models/taskModel");

const getTask = async (req, res) => {
    try {
        const email = req.query.email;
        const filter = { email: email };
        const result = await taskCollection.find(filter);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = getTask;
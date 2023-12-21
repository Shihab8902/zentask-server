const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    order: {
        type: Number
    }
});


const taskCollection = mongoose.model("tasks", taskSchema);


module.exports = taskCollection;
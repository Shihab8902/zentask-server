const express = require("express");
const app = express();
const cors = require("cors");

const clientRoutes = require("./routes/clients");
const taskRoutes = require("./routes/tasks")



//Middlewares
app.use(cors());
app.use(express.json());



//Routes
app.use(clientRoutes);
app.use(taskRoutes);



//Default route
app.get("/", (req, res) => {
    res.send({ message: "The server is up and running....." })
});




module.exports = app;
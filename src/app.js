const express = require("express");
const app = express();
const cors = require("cors");

const clientRoutes = require("./routes/clients");



//Middlewares
app.use(cors());



//Routes
app.use(clientRoutes);



//Default route
app.get("/", (req, res) => {
    res.send({ message: "The server is up and running....." })
});




module.exports = app;
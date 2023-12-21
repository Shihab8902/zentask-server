const express = require("express");
const app = express();









//Default route
app.get("/", (req, res) => {
    res.send({ message: "The server is up and running....." })
});




module.exports = app;
const express = require("express");
const app = express();
const cors = require("cors");

const clientRoutes = require("./routes/clients");
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connectDB");

const port = process.env.PORT || 9001;



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




//Database connection and listen server

const listenServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`The server is running at http://localhost:${port}`)
    });

}

listenServer();

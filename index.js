require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");
const port = process.env.PORT || 9000;



//Listen server
app.listen(port, () => {
    connectDB();
    console.log(`The server is running at http://localhost:${9000}`)
});

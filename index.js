require("dotenv").config();
const app = require("./src/app");
const port = process.env.PORT || 9000;



//Listen server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${9000}`)
});

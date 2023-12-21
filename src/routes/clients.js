const app = require("../app");
const getClients = require("../controllers/clients/getClients");

const router = require("express").Router();


router.get("/api/clients", getClients);


module.exports = router;
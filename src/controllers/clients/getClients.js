const clientsCollection = require("../../models/clientsModel");

const getClients = async (req, res) => {
    try {
        const result = await clientsCollection.find();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = getClients;
const { default: mongoose } = require("mongoose");

const clientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


const clientsCollection = mongoose.model('clients', clientsSchema);

module.exports = clientsCollection;
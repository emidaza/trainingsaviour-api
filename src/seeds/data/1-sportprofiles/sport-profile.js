const { getObjectId } = require("mongo-seeding");

module.exports = [
    {
        _id: getObjectId("patin"),
        name: "Patin"
    },
    {
        _id: getObjectId("ciclismo"),
        name: "Ciclismo"
    },
    {
        _id: getObjectId("gimnasio"),
        name: "Gimnasio"
    },
    {
        _id: getObjectId("trote"),
        name: "Trote"
    }
]
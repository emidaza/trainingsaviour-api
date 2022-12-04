const { getObjectId } = require("mongo-seeding");

module.exports = [
    {
        _id: getObjectId("administrator"),
        firstName: "Emiliano",
        lastName: "Daza",
        username: "admin",
        password: "Password123!",
        email: "emiliano.daza@gmail.com"
    }
]
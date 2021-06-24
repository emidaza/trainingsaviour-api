const { getObjectId } = require("mongo-seeding");

module.exports = [
    {
        _id: getObjectId("subaerobico"),
        name: "Sub Aerobico",
        type: "aerobic",
        sportProfiles: [
            getObjectId("patin"),
            getObjectId("ciclismo"),
            getObjectId("trote")
        ]
    },
    {
        _id: getObjectId("superaerobico"),
        name: "Super Aerobico",
        type: "aerobic",
        sportProfiles: [
            getObjectId("patin"),
            getObjectId("ciclismo"),
            getObjectId("trote")
        ]
    },
    {
        _id: getObjectId("vo2m"),
        name: "Vo2m",
        type: "aerobic",
        sportProfiles: [
            getObjectId("patin"),
            getObjectId("ciclismo"),
            getObjectId("trote")
        ]
    },
    {
        _id: getObjectId("regenerativo"),
        name: "Regenerativo",
        type: "aerobic",
        sportProfiles: [
            getObjectId("patin"),
            getObjectId("ciclismo"),
            getObjectId("trote")
        ]
    },
    {
        _id: getObjectId("restlactica"),
        name: "Resistencia Anaerobica Lactica",
        type: "anaerobic",
        sportProfiles: [
            getObjectId("patin"),
            getObjectId("ciclismo"),
            getObjectId("trote")
        ]
    },
    {
        _id: getObjectId("potencialactica"),
        name: "Potencia Anaerobica Lactica",
        type: "anaerobic",
        sportProfiles: [
            getObjectId("patin"),
            getObjectId("ciclismo"),
            getObjectId("trote")
        ]
    },
]
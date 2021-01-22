const { getObjectId } = require('mongo-seeding');

const data = [{
    _id: getObjectId("5e8508ea69a10e42d07414be") ,
    initDate: "2020-01-06T19:32:00.000Z",
    endDate: "2020-03-22T19:32:00.000Z",
    name: "Cuarentena2020",
    weekCount: 10,
    microcycles: [
        getObjectId("6001ee3a0aed9e0110190df0" ),
        getObjectId("6001ee3a0aed9e0110190df1" ),
        getObjectId("6001ee3a0aed9e0110190df2" ),
        getObjectId("6001ee3a0aed9e0110190df3" ),
        getObjectId("6001ee3a0aed9e0110190df4" ),
        getObjectId("6001ee3a0aed9e0110190df5" ),
        getObjectId("6001ee3a0aed9e0110190df6" ),
        getObjectId("6001ee3a0aed9e0110190df7" ),
        getObjectId("6001ee3a0aed9e0110190df8" ),
        getObjectId("6001ee3a0aed9e0110190df9" )
    ]
},
{
    _id: getObjectId("5fe3bf23a2541957008a365b") ,
    initDate: "2020-12-23T21:32:00.000Z",
    endDate: "2021-02-14T21:32:00.000Z",
    name: "Cuarentena2020-short",
    weekCount: 7,
    microcycles: [
        getObjectId("5fe3bf23a2541957008a3654" ),
        getObjectId("5fe3bf23a2541957008a3655" ),
        getObjectId("5fe3bf23a2541957008a3656" ),
        getObjectId("5fe3bf23a2541957008a3657" ),
        getObjectId("5fe3bf23a2541957008a3658" ),
        getObjectId("5fe3bf23a2541957008a3659" ),
        getObjectId("5fe3bf23a2541957008a365a" ),
    ]
}
]

module.exports = data;
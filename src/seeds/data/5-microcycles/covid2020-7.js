
const { getObjectId } = require('mongo-seeding');
const { getTrainingDaysIds } = require('../../utils/trainingSessionUtil');

module.exports = [
    {
        "_id":  getObjectId("5fe3bf23a2541957008a3654"),
        "initDate": "2020-12-23T21:32:00.000Z",
        "endDate": "2020-12-27T21:32:00.000Z",
        "createdAt": "2020-12-23T22:05:23.210Z",
        "updatedAt": "2020-12-23T22:05:23.210Z",
        "trainingDays": getTrainingDaysIds('2020-12-23T21:32:00.000Z',"2020-12-27T21:32:00.000Z")
    },
    {
        "_id":  getObjectId("5fe3bf23a2541957008a3655"),
        "initDate": "2020-12-28T21:32:00.000Z",
        "endDate": "2021-01-03T21:32:00.000Z",
        "createdAt": "2020-12-23T22:05:23.210Z",
        "updatedAt": "2020-12-23T22:05:23.210Z",
        "trainingDays": getTrainingDaysIds('2020-12-28T21:32:00.000Z',"2021-01-03T21:32:00.000Z")
    },
    {
        "_id":  getObjectId("5fe3bf23a2541957008a3656"),
        "initDate": "2021-01-04T21:32:00.000Z",
        "endDate": "2021-01-10T21:32:00.000Z",
        "createdAt": "2020-12-23T22:05:23.211Z",
        "updatedAt": "2020-12-23T22:05:23.211Z",
        "trainingDays": getTrainingDaysIds('2021-01-04T21:32:00.000Z',"2021-01-10T21:32:00.000Z")
    },
    {
        "_id": getObjectId("5fe3bf23a2541957008a3657"),
        "initDate": "2021-01-11T21:32:00.000Z",
        "endDate": "2021-01-17T21:32:00.000Z",
        "createdAt": "2020-12-23T22:05:23.211Z",
        "updatedAt": "2020-12-23T22:05:23.211Z",
        "trainingDays": getTrainingDaysIds('2021-01-11T21:32:00.000Z',"2021-01-17T21:32:00.000Z")
    },
    {
        "_id":  getObjectId( "5fe3bf23a2541957008a3658"),
        "initDate": "2021-01-18T21:32:00.000Z",
        "endDate": "2021-01-24T21:32:00.000Z",
        "createdAt": "2020-12-23T22:05:23.211Z",
        "updatedAt": "2020-12-23T22:05:23.211Z",
        "trainingDays": getTrainingDaysIds('2021-01-18T21:32:00.000Z',"2021-01-24T21:32:00.000Z")
    },
    {
        "_id":  getObjectId( "5fe3bf23a2541957008a3659"),
        "initDate": "2021-01-25T21:32:00.000Z",
        "endDate": "2021-01-31T21:32:00.000Z",
        "createdAt": "2020-12-23T22:05:23.211Z",
        "updatedAt": "2020-12-23T22:05:23.211Z",
        "trainingDays": getTrainingDaysIds('2021-01-25T21:32:00.000Z',"2021-01-31T21:32:00.000Z")
    },
    {
        "_id":  getObjectId("5fe3bf23a2541957008a365a"),
        "initDate": "2021-02-01T21:32:00.000Z",
        "endDate": "2021-02-07T21:32:00.000Z",
        "createdAt": "2020-12-23T22:05:23.211Z",
        "updatedAt": "2020-12-23T22:05:23.211Z",
        "trainingDays": getTrainingDaysIds('2021-02-01T21:32:00.000Z',"2021-02-07T21:32:00.000Z")
    }
]

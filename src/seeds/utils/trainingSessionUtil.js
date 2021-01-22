const { getObjectId } = require('mongo-seeding');
const moment = require('moment');

function generateTrainingDays(initDate, endDate) {
    let mInitDate = moment(initDate);
    let mEndDate = moment(endDate);
    let totalDays = mEndDate.diff(mInitDate, 'd');
    let trainingDays = []
    for (let i = 0; i <= totalDays; i++) {
        let indexDate = moment(initDate).add(i, 'd');
        trainingDays.push(
            {
                date: indexDate.toDate(),
                trainingSessions: generateTrainingSessions()
            }
        )
    }
    return trainingDays;    
}

function generateTrainingSessions() {
    const sessionCount = Math.floor(Math.random(0, 4) * (4 - 0));
    const trainingSessions = [];
    for (let i = 0; i < sessionCount; i++) {
        trainingSessions.push({
            order: i + 1,
            title: getTrainingTurnName(i),
            workouts: generateWorkouts()
        })
    }
    return trainingSessions;
}

function generateWorkouts() {
    const workoutsCount = getRandomInt(0, 7);
    const workouts = [];
    for (let i = 0; i < workoutsCount; i++) {
        const repetitions = getRandomInt(1, 5);
        const series = getRandomInt(1, 4);
        const amount = generateReasonableDistance(repetitions, series)
        workouts.push({
            order: i + 1,
            name: 'Autogenerado',
            repetitions: repetitions,
            series: series,
            amount: amount,
            intensity: 50,
            functionalArea: getObjectId(getFunctionalArea(amount))
        })
    }
    return workouts;
}

function generateReasonableDistance(repetitions, series) {
    const totalRepetitions = repetitions * series;
    if (totalRepetitions === 1) {
        return 15000;
    }
    if (totalRepetitions > 1 && totalRepetitions <= 2) {
        return 10000;
    }

    if (totalRepetitions > 2 && totalRepetitions <= 4) {
        return 5000;
    }
    if (totalRepetitions > 4 && totalRepetitions <= 7) {
        return 3000;
    }

    if (totalRepetitions > 7 && totalRepetitions <= 11) {
        return 1000;
    }

    if (totalRepetitions > 11) {
        return 500;
    }
}

function getFunctionalArea(distance) {
    if(distance < 500) {
        return "potencialactica";
    }
    if(distance < 1000 && distance >= 500 ) {
        return "restlactica";
    }
    if(distance === 1000) {
        return "vo2m";
    }
    if(distance > 1000 && distance <= 5000) {
        return "superaerobico";
    }
    if(distance > 5000) {
        return "aubaerobico"
    }
}

function getRandomInt(max, min) {
    return Math.floor(Math.random(min, max) * (max - min) + min)
}

function getTrainingTurnName(i) {
    switch (i) {
        case 0:
            return 'Mañana';
        case 1:
            return 'Mediodia';
        case 2:
            return 'Noche';
    }
}

module.exports = {
    generateTrainingDays,
    generateTrainingSessions,
    generateWorkouts,
    getTrainingTurnName
};
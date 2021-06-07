const { trainingDates } = require("../../constants/trainingDays-dates.const");
const { generateTrainingDays } = require("../../utils/trainingSessionUtil");

function createTrainingDays() {
    trainingDays = [];
    trainingDates.forEach(dates => {
        trainingDays.push(...generateTrainingDays(dates[0], dates[1]));
    });
    return trainingDays;
}

module.exports = createTrainingDays();
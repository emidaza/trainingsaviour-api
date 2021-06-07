const { trainingDates } = require("../../constants/trainingDays-dates.const");
const { generateWorkouts } = require("../../utils/trainingSessionUtil");
const moment = require('moment');

function createWorkouts() {
    workouts = [];
    trainingDates.filter((d, index) => index <= 2).forEach(dates => {
        let mInitDate = moment(dates[0]);
        let mEndDate = moment(dates[1]);
        let totalDays = mEndDate.diff(mInitDate, 'd');
        for (let i = 0; i <= totalDays; i++) {
            let indexDate = moment(dates[0]).add(i, 'd');
            for (let i = 0; i < 2; i++) {
                workouts.push(...generateWorkouts(i, indexDate));
            }
        }
    });
    return workouts;
}

module.exports = createWorkouts();
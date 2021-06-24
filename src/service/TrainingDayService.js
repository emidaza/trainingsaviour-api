import Service from "./Service";

class TrainingDayService extends Service {
    constructor(model, workoutModel) {
        super(model);
        this.workoutModel = workoutModel;
        this.insertWorkout = this.insertWorkout.bind(this);
    }

    async insertWorkout(data, trainingDayId, sessionOrder) {
        try {
            let trainingDay = await this.model
                .findById(trainingDayId);
            if (!trainingDay)
                return {
                    error: true,
                    statusCode: 404,
                    message: error.errmsg || "Training day not found"
                }
            let newWorkout = await this.workoutModel.create(data);
            if (newWorkout) {
                const trainingSessionIndex = trainingDay.trainingSessions.findIndex(trainingSession => trainingSession.order === parseInt(sessionOrder));
                if (trainingSessionIndex === -1)
                    return {
                        error: true,
                        statusCode: 404,
                        message: "Training session not found"
                    }
                trainingDay.trainingSessions[trainingSessionIndex].workouts.push(newWorkout._id);
                trainingDay = await this.model.findByIdAndUpdate(trainingDay._id, trainingDay);

                return {
                    error: false,
                    statusCode: 202,
                    trainingDay
                }
            }

        } catch (error) {
            console.log(error)
            return {
                error: true,
                statusCode: 500,
                message: error.errmsg || "Not able to create workout",
                errors: error.errors
            };
        }
    }
}

export default TrainingDayService;
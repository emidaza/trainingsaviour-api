import TrainingDay from "../model/TrainingDay";
import Workout from "../model/Workout";
import TrainingDayService from "../service/TrainingDayService";
import Controller from "./Controller";

const trainingDayService = new TrainingDayService(
    TrainingDay,
    Workout
);

class TrainingDayController extends Controller {
    constructor(service) {
        super(service);
        this.insertWorkout = this.insertWorkout.bind(this)
    }

    async insertWorkout(req, res) {
        const { id } = req.params;
        const { sessionOrder } = req.query;
        let response = await this.service.insertWorkout(req.body, id, sessionOrder);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(201).send(response);
    }
}

export default new TrainingDayController(trainingDayService);
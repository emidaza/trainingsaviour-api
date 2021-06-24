import Workout from "../model/Workout";
import WorkoutService from "../service/WorkoutService";
import Controller from "./Controller";

const workoutService = new WorkoutService(
    Workout
);

class WorkoutController extends Controller {
    constructor(service) {
        super(service)
    }
}

export default new WorkoutController(workoutService);
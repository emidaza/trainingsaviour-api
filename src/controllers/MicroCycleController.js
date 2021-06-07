import MicroCycle from "../model/MicroCycle";
import MicroCycleService from '../service/MicroCycleService';
import Controller from "./Controller";

const microCycleService = new MicroCycleService(
    MicroCycle
  );

class MicroCycleController extends Controller{
    constructor(service) {
        super(service)
    }
}

export default new MicroCycleController(microCycleService);
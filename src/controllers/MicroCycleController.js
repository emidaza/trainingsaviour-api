import MicroCycle from "../model/MicroCycle";
import Controller from "./Controller";
import MicroCycleService from '../service/MicroCycleService';

const microCycleService = new MicroCycleService(
    MicroCycle
  );

class MicroCycleController extends Controller{
    constructor(service) {
        super(service)
    }
}

export default new MicroCycleController(microCycleService);
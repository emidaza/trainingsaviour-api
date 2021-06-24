import FunctionalArea from "../model/FunctionalArea";
import Controller from "./Controller";
import FunctionalAreaService from '../service/FunctionalAreaService';

const functionalAreaService = new FunctionalAreaService(
    FunctionalArea
  );

class FunctionalAreaController extends Controller{
    constructor(service) {
        super(service)
    }
}

export default new FunctionalAreaController(functionalAreaService);
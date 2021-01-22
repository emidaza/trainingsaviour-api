import MacroCycle from '../model/MacroCycle';
import MicroCycle from '../model/MicroCycle';
import MacroCycleService from '../service/MacroCycleService';
import Controller from './Controller';

const macroCycleService = new MacroCycleService(
  MacroCycle,
  MicroCycle
);

class MacroCycleController extends Controller {

  constructor(service) {
    super(service);
    this.getWithMicroCycles = this.getWithMicroCycles.bind(this)
  }

  async getWithMicroCycles(req, res) {
    const { id } = req.params;
    const response = await this.service.getWithMicroCycles(id);
    return res.status(response.statusCode).send(response);
  }

}

export default new MacroCycleController(macroCycleService);
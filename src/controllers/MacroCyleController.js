import MacroCycle from '../model/MacroCycle';
import MacroCycleService from '../service/MacroCycleService';
import Controller from './Controller';

const macroCycleService = new MacroCycleService(
  new MacroCycle().getInstance()
);

class MacroCycleController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new MacroCycleController(macroCycleService);
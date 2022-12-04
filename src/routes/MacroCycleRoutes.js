import MacroCycleController from '../controllers/MacroCycleController';
import oauthServer from '../config/oauthServer';

export default (server) => {

    // POST ROUTES
    server.get(`/api/macrocycle`, oauthServer.authenticate(),  MacroCycleController.getAll);
    server.post(`/api/macrocycle`, MacroCycleController.insert)
    server.put(`/api/macrocycle/:id`, MacroCycleController.update);
    server.delete(`/api/macrocycle/:id`, MacroCycleController.delete);
    server.get(`/api/macrocycle/:id/microcycles`, MacroCycleController.getWithMicroCycles);

}
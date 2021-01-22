import MacroCycleController from '../controllers/MacroCycleController';

export default (server) => {

    // POST ROUTES
    server.get(`/api/macrocycle`, MacroCycleController.getAll);
    server.post(`/api/macrocycle`, MacroCycleController.insert)
    server.put(`/api/macrocycle/:id`, MacroCycleController.update);
    server.delete(`/api/macrocycle/:id`, MacroCycleController.delete);
    server.get(`/api/macrocycle/:id/microcycles`, MacroCycleController.getWithMicroCycles);

}
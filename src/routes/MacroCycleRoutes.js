import MacroCycleController from '../controllers/MacroCyleController';

export default (server) => {

    // POST ROUTES
    server.get(`/api/macrocycle`, MacroCycleController.getAll);
    server.post(`/api/macrocycle`, MacroCycleController.insert)
    server.put(`/api/macrocycle/:id`, MacroCycleController.update);
    server.delete(`/api/macrocycle/:id`, MacroCycleController.delete);

}
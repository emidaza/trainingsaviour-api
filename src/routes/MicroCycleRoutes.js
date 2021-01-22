import MicroCycleController from '../controllers/MicroCycleController';

export default (server) => {

    // POST ROUTES
    server.get(`/api/microcycle`, MicroCycleController.getAll);
    server.post(`/api/microcycle`, MicroCycleController.insert)
    server.put(`/api/microcycle/:id`, MicroCycleController.update);
    server.delete(`/api/microcycle/:id`, MicroCycleController.delete);

}
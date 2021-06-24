import FunctionalAreaController from '../controllers/FunctionalAreaController';

export default (server) => {

    // POST ROUTES
    server.get(`/api/functionalarea`, FunctionalAreaController.getAll);
    server.post(`/api/functionalarea`, FunctionalAreaController.insert)
    server.put(`/api/functionalarea/:id`, FunctionalAreaController.update);
    server.delete(`/api/functionalarea/:id`, FunctionalAreaController.delete);

}
import WorkoutController from '../controllers/WorkoutController';

export default (server) => {

    // POST ROUTES
    server.get(`/api/workout`, WorkoutController.getAll);
    server.post(`/api/workout`, WorkoutController.insert)
    server.put(`/api/workout/:id`, WorkoutController.update);
    server.delete(`/api/workout/:id`, WorkoutController.delete);

}
import TrainingDayController from '../controllers/TrainingDayController';

export default (server) => {

    // POST ROUTES
    server.get(`/api/training-day`, TrainingDayController.getAll);
    server.post(`/api/training-day`, TrainingDayController.insert)
    server.put(`/api/training-day/:id`, TrainingDayController.update);
    server.delete(`/api/training-day/:id`, TrainingDayController.delete);
    server.post('/api/training-day/:id/workout', TrainingDayController.insertWorkout);

}
import FunctionalAreaRoutes from './FunctionalAreaRoutes';
import macrocycleRoutes from './MacroCycleRoutes';
import MicroCycleRoutes from './MicroCycleRoutes';
import TrainingDayRoutes from './TrainingDayRoutes';
import userRoutes from './users';
import WorkoutRoutes from './WorkoutRoutes';

export default (server) => {
  // Main route
  server.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });

  //Modules routes
  userRoutes(server);
  macrocycleRoutes(server);
  MicroCycleRoutes(server);
  FunctionalAreaRoutes(server);
  WorkoutRoutes(server);  
  TrainingDayRoutes(server);
}
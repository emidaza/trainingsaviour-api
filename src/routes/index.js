import macrocycleRoutes from './MacroCycleRoutes';
import userRoutes from './users';

export default (server) => {
  // Main route
  server.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });

  //Modules routes
  userRoutes(server);
  macrocycleRoutes(server);
}
export default (server) => {
  // Main route
  server.get('/', function (req, res, next) {
    res.send('respond with a resource');
  });
}
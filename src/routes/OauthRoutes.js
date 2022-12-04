import oauthServer from '../config/oauthServer';
import OauthController from '../controllers/OauthController';

export default (server) => {
    // POST ROUTES
    server.post(`/oauth/access_token`, OauthController.postAccessToken);
    server.get(`/oauth/authenticate`, OauthController.getAuthenticate)
    server.post(`/oauth/authenticate`, OauthController.postAuthenticate, oauthServer.authorize({
        authenticateHandler: {
            handle: req => {
                return req.body.user;
            }
        }
    }));

}
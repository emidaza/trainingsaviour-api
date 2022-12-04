import oauthServer from '../config/oauthServer';
import User from '../model/User';

class OauthController {
    constructor() {
        this.postAccessToken = this.postAccessToken.bind(this);
        this.oauth = oauthServer;
    }

    postAccessToken() {
        this.oauth.token({
            requireClientAuthentication: { authorization_code: false }
        })
    }

    async getAuthenticate(req, res) {
        return res.redirect('http://localhost:3000/admin/user');
    }

    async postAuthenticate(req, res, next) {
        req.body.user = await User.findOne({ username: req.body.username });
        return next();
    }


}

export default new OauthController();
import OauthServer from "express-oauth-server";
import OAuthModel from "../model/oauth";

export default new OauthServer({
    model: OAuthModel,
    debug: true,
    useErrorHandler: true
});
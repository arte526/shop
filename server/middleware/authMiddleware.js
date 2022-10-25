const ApiError = require('../error/apiError');
const tokenService = require('../services/tokenService');

module.exports = function (req, res, next) {
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return next(ApiError.unAuthorized())
        }

        const accessToken = authHeader.split(' ')[1];
        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData){
            return next(ApiError.unAuthorized())
        }
        req.user = userData;
        next();
    }catch (e) {
        next(ApiError.unAuthorized())
    }
}
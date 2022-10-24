require("dotenv").config();
const jwt = require('jsonwebtoken');
const tokenModel = require('../db/models/tokenModel');

class tokenService {

    validateAccessToken(token) {
        try{
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        }catch (e){
            return null
        }
    } 
    validateRefreshToken(token) {
        try{
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        }catch (e){
            return null
        }
    } 

    async generateTokens (payload) {
        const accessToken = jwt.sign({...payload}, process.env.JWT_ACCESS_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({...payload}, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
        return {
            accessToken, 
            refreshToken
        }
    }

    async saveTokens (user_id, refreshToken) {  
        const token = await tokenModel.findOne({user_id});
        if (token){
            token.refreshToken = refreshToken;
            return token.save();
        }
        const tokenNew = await tokenModel.create({user_id, refreshToken}); 
        return tokenNew;
    }

    async removeToken (refreshToken) {
        const token = await tokenModel.deleteOne({refreshToken});
        return token;
    }

    async findToken (refreshToken) {
        const token = await tokenModel.findOne({refreshToken});
        return token;
    }
}

module.exports = new tokenService();
require("dotenv").config();
const jwt = require('jsonwebtoken');
const tokenModel = require('../db/models/tokenModel');

class tokenService {
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
}

module.exports = new tokenService();
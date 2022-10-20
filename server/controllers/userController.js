const ApiError = require("../error/apiError");
const bcrypt = require('bcrypt');
const User_model = require("../db/models/userModel");
const userService = require('../services/userService');

class UserController {
    async register (req, res) {
        try{
            const {email, password} = req.body;
            const userData = await userService.register(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(userData);
        }catch (e){
            console.log(e);
        }
        
    }
    async login (req, res) {

    }
    async check (req, res, next) {
    }
}

module.exports = new UserController();
const ApiError = require("../error/apiError");
const bcrypt = require('bcrypt');
const UserModel = require("../db/models/userModel");
const userService = require('../services/userService');

class UserController {
    async register (req, res) {
        try{
            const {email, password} = req.body;
            const registeredUser = await userService.register(email, password);
            res.cookie('refreshToken', registeredUser.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(registeredUser);
        }catch (e){
            console.log(e);
        }
        
    }
    async login (req, res) {
        try{

        }catch (e){
            console.log(e)
        }
    }
    async check (req, res, next) {
        try{

        }catch (e){
            console.log(e)
        }
    }
    async activate (req, res, next){
        try{
            await userService.activate(req.params.link);
            return res.redirect(`${process.env.BASE_CLIENT_URL}/${process.env.CLIENT_URL_ACTIVATION_PAGE}`);
        }catch (e){
            console.log(e)
        }
    }
}

module.exports = new UserController();
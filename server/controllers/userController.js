const ApiError = require("../error/apiError");
const bcrypt = require('bcrypt');
const UserModel = require("../db/models/userModel");
const userService = require('../services/userService');
const {validationResult} = require('express-validator');

class UserController {
    async register (req, res, next) {
        try{
            const isValid = validationResult(req);
            if(!isValid.isEmpty()){
                return next(ApiError.badRequest(`Error with validation`, isValid.array()))
            }
            const {email, password} = req.body;
            const userData = await userService.register(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(userData);
        }catch (e){
            next(e)
        }
    }
    async login (req, res, next) {
        try{
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(userData);
        }catch (e){
            next(e)
        }
    }
    async logout (req, res, next) {
        try{
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json({message: 'Successful logout', token});
        }catch (e){
            next(e)
        }
    }
    async refresh (req, res, next) {
        try{
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(userData);
        }catch (e){
            next(e)
        }
    }
    async check (req, res, next) {
        try{

        }catch (e){
            next(e)
        }
    }
    async activate (req, res, next){
        try{
            await userService.activate(req.params.link);
            return res.redirect(`${process.env.BASE_CLIENT_URL}/${process.env.CLIENT_URL_ACTIVATION_PAGE}`);
        }catch (e){
            next(e)
        }
    }
}

module.exports = new UserController();
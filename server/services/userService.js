const UserModel = require('../db/models/userModel');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const { sendActivationMail } = require('./mailService');
const tokenService = require('./tokenService');
const userDTO = require('../dtos/userDto');
const ApiError = require('../error/apiError');


class userService {

    async register (email, password) {
        const isUser = await UserModel.findOne({email: email});
        if(isUser){
            throw ApiError.forbidden(`User with email: ${email} is already exists`);
        }

        const activationLink = uuid.v4();
        const userId = uuid.v4();
        const hasedpassword = await bcrypt.hash(password, 7);

        const UserParams = {
            user_id: userId, 
            email: email, 
            password: hasedpassword,
            activationLink
        };

        const user = new UserModel(UserParams);
        await user.save();

        await sendActivationMail(email, `${process.env.BASE_API_URL}/api/user/activate/${activationLink}`);
        
        const userDto = new userDTO(user);
        const tokens = await tokenService.generateTokens(userDto);
        await tokenService.saveTokens(userDto.id, tokens.refreshToken);

        return {
            message: 'Success registration',
            user: userDto,
            ...tokens
        };
    }

    async activate (activationLink) {
        const user = await UserModel.findOne({activationLink});
        if(!user){
            throw ApiError.badRequest(`User not registered`);
        }
        user.activationLink = null;
        user.isActivated = true;
        await user.save();
    }

    async login (email, password) {
        const user = await UserModel.findOne({email});
        if(!user){
            throw ApiError.badRequest(`User with ${email} not registered`);
        }
        const validatePassword = await bcrypt.compare(password, user.password);
        if(!validatePassword){
            throw ApiError.badRequest(`Password isn't correct`);
        }
        const userDto = new userDTO(user);
        const tokens = await tokenService.generateTokens(userDto);
        await tokenService.saveTokens(userDto.id, tokens.refreshToken);

        return {
            message: 'Success authorization',
            user: userDto,
            ...tokens
        };
    }

    async logout (refreshToken) {
        const tokenData = await tokenService.removeToken(refreshToken);
        return tokenData;
    }

    async refresh (refreshToken) {
        if(!refreshToken){
            throw ApiError.unAuthorized();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const token =  tokenService.findToken(refreshToken);

        if(!userData || !token){
            throw ApiError.unAuthorized();
        }

        const user = await UserModel.findById(userData.id)
        const userDto = new userDTO(user);
        const tokens = await tokenService.generateTokens(userDto);
        await tokenService.saveTokens(userDto.id, tokens.refreshToken);

        return {
            message: 'Success authorization',
            user: userDto,
            ...tokens
        };
    }
}

module.exports = new userService();
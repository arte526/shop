const User_model = require('../db/models/userModel');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const { sendActivationMail } = require('./mailService');
const tokenService = require('./tokenService');
const userDTO = require('../dtos/userDto');

class userService {

    async register (email, password) {
        const isUser = await User_model.findOne({email: email});
        if(isUser){
            throw new Error(`User with email: ${email} is already exists`);
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

        const user = new User_model(UserParams);
        await user.save();

        await sendActivationMail(email, activationLink);
        
        const tokenUserDTO = new userDTO(user);
        const tokens = await tokenService.generateTokens({...tokenUserDTO});
        await tokenService.saveTokens(tokenUserDTO.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDTO
        };
    }

}

module.exports = new userService();
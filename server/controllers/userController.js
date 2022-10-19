const ApiError = require("../error/apiError");
const bcrypt = require('bcrypt');
const User = require("../db/models/userModel");

class UserController {
    async register (req, res) {
        const {email, password} = req.body;

        const mixedEmailPassword = email + password;
        const user_idHash = await bcrypt.hash(mixedEmailPassword, 7);
        const hasedpassword = await bcrypt.hash(password, 7);

        const UserParams = {
            user_id: user_idHash, 
            email: email, 
            password: hasedpassword
        };

        const isUser = await User.findOne({email: email});
        if(isUser){
            return res.json(`User with email: ${email} is already exists`);
        }else{
            const user = new User(UserParams);
            await user.save();
            return res.json(user);
        }
    }
    async login (req, res) {

    }
    async check (req, res, next) {
    }
}

module.exports = new UserController();
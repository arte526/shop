module.exports = class UserDTO {
    id;
    email;
    isActivated;
    constructor (user) {
        this.email = user.email, 
        this.id = user._id,
        this.isActivated = user.isActivated
    } 
}


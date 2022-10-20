const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = mongoose.model('User', new Schema({
    user_id: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: false, default: null},
    lastName: {type: String, required: false, default: null},
    streetAdress: {type: String, required: false, default: null},
    city: {type: String, required: false, default: null},
    stateProvince: {type: String, required: false, default: null},
    zipPostalcode: {type: String, required: false, default: null},
    country: {type: String, required: false, default: null},
    phoneNumber: {type: String, required: false, default: null},
    cart: [{
        item_id: {type: Schema.Types.ObjectId, ref: 'Item'},
        countItem: Number,
    }],
    likedItems: [{item_id: String}],
    role: {
        roleName: {type: String, required: false, default: "user"},
        roleLogin: {type: String, required: false, default: null},
        rolePass: {type: String, required: false, default: null},
    },
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String },
    createdAt: {type: String, required: false, default: (new Date()).getTime()},
    updatedAt: {type: String, required: false, default: (new Date()).getTime()},
}));

module.exports = User;
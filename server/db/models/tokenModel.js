const mongoose = require('mongoose');
const { Schema } = mongoose;

const TokenModel = mongoose.model('Token', new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: { type: String },
    createdAt: {type: String, required: false, default: (new Date()).getTime()},
    updatedAt: {type: String, required: false, default: (new Date()).getTime()},
}));

module.exports = TokenModel;
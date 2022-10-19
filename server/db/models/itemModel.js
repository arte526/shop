const mongoose = require('mongoose');
const { Schema } = mongoose;

const Item = mongoose.model('Item', new Schema({
    item_id: {type: String, unique: true, required: true},
    item_brand_id: {type: String, required: true},
    item_type_id: {type: String, required: true},
    item_price: {type: Number, required: true, default: 0},
    item_rating: {type: Number, required: false, default: 0},
    item_description: {type: String, required: true},
    item_characteristics: [{
        characteristic_name: {type: String},
        characteristic_params: {type: String},
    }],
    item_comments: [{
        comment_user_id: {type: String, unique: true, required: true},
        comment: {type: String, required: true},
        comment_createdAt: {type: String, required: false, default: (new Date()).getTime()},
    }],
    createdAt: {type: String, required: false, default: (new Date()).getTime()},
    updatedAt: {type: String, required: false, default: (new Date()).getTime()},
}));

module.exports = Item;
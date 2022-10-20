const mongoose = require('mongoose');
const { Schema } = mongoose;

const Item = mongoose.model('Item', new Schema({
    item_id: {type: String, unique: true, required: true},
    item_brand_id: {type: Schema.Types.brand_id, ref: 'ItemBrand'},
    item_type_id: {type: Schema.Types.type_id, ref: 'ItemType'},
    item_price: {type: Number, required: true, default: 0},
    item_rating: {type: Number, required: false, default: 0},
    item_description: {type: String, required: true},
    item_characteristics: [{
        characteristic_name: {type: String},
        characteristic_params: {type: String},
    }],
    item_comments: [{
        comment_user_id: {type: Schema.Types.ObjectId, ref: 'User'},
        comment: {type: String, required: true},
        comment_createdAt: {type: String, required: false, default: (new Date()).getTime()},
    }],
    createdAt: {type: String, required: false, default: (new Date()).getTime()},
    updatedAt: {type: String, required: false, default: (new Date()).getTime()},
}));

module.exports = Item;
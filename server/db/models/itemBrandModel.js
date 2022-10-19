const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemBrand = mongoose.model('ItemBrand', new Schema({
    brand_id: {type: String, unique: true, required: true},
    brand_type: {type: String, required: true},
    brand_name: {type: String, required: false, default: null},
    createdAt: {type: String, required: false, default: (new Date()).getTime()},
    updatedAt: {type: String, required: false, default: (new Date()).getTime()},
}));

module.exports = ItemBrand;
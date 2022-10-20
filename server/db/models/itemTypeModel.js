const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemType = mongoose.model('ItemType', new Schema({
    type_id: {type: String, unique: true, required: true},
    type_name: {type: String, required: false, default: null},
    createdAt: {type: String, required: false, default: (new Date()).getTime()},
    updatedAt: {type: String, required: false, default: (new Date()).getTime()},
}));

module.exports = ItemType;
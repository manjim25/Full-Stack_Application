const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    age: { type: Number, required: true },
    description: Number,
    state: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

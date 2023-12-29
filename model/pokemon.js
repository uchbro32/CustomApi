const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    number: Number,
    name: String,
    type: [String],
    base: {
        hp: Number, 
        attack: Number,
        defence: Number,
        sp_attack: Number,
        sp_defence: Number,
        speed: Number
    }
});

module.exports = new mongoose.model('Pokemon', pokemonSchema);
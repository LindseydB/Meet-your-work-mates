const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mate = new Schema({
    _id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    role: {
        type:  String,
        default: ''
    },

    dept: {
        type:  String,
        default: ''
    },
    
    locat: {
        type:  String,
        default: ''
    },

    interests: [{
        type: String
    }],
    skills: [{
        type: String
    }]
});

Mate.index({ email: "text", name: "text", mobile: "text", interests: "text" });

module.exports = mongoose.model('Mate', Mate);
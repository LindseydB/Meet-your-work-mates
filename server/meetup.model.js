const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Meetup = new Schema({
    inviter: {
        type: String,
        required: true
    },
    invitee: {
        type: String,
        required: true
    },
    meetupTime: {
        type: Date,
        required: true
    },
    meetupPlace: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Meetup', Meetup);
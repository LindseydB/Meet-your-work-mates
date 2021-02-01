const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mate = new Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    mobile: {
        type: String
    }
    //job: {
    //    type: String
    //}
    //interests: [{
    //    type:  String
    //}]

});

module.exports = mongoose.model('Mate', Mate);
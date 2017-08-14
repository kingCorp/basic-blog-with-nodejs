var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    }
})




module.exports = mongoose.model('Post', postSchema);
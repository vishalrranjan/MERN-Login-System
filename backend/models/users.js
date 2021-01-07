const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 3,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
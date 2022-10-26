'use strict';
const mongoose = require('mongoose');
const {
    Schema: Schema
} = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    username: {
        type: String,
        required: false,
        max: 100,
    },
    password: {
        type: String,
        required: false,
        max: 100,
    },
    twitterId: {
        type: String,
        required: false,
        max: 100,
    },
});
userSchema.plugin(findOrCreate);

module.exports.User = mongoose.model('users', userSchema);
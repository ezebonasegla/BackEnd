'use strict';
const bcrypt = require("bcrypt");

module.exports.isValidPassword = function isValidPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
};

module.exports.createHash = function createHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
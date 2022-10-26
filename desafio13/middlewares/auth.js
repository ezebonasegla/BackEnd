'use strict';
module.exports.checkAuth = function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
};

module.exports.checkNotAuth = function checkNotAuth(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/home");
    } else {
        next();
    }
};
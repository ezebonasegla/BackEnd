'use strict';
const {
    Router: Router
} = require('express');

const path = require("path");

const passport = require("passport");

const {
    checkNotAuth: checkNotAuth
} = require('../middlewares/auth.js');

const authWebRouter = new Router();

authWebRouter.get('/', (req, res) => {
    res.redirect('/home')
})


authWebRouter.get("/login", checkNotAuth, (req, res) => {
    res.render("login");
})

authWebRouter.get("/register", checkNotAuth, (req, res) => {
    res.render(path.join(process.cwd(), '/views/register.ejs'))
})

authWebRouter.get('/logout', (req, res) => {
    let {
        username
    } = req.user;
    req.logout();
    res.render('logout', {username})
})

authWebRouter.get('/failLogin', (req, res) => {
    res.render(path.join(process.cwd(), '/views/failLogin.ejs'))
})

authWebRouter.get('/failRegister', (req, res) => {
    res.render(path.join(process.cwd(), '/views/failRegister.ejs'))
})

authWebRouter.get("/auth/twitter", passport.authenticate("twitter"));

authWebRouter.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", {
        successRedirect: "/home",
        failureRedirect: "/failLogin",
    })
);

authWebRouter.post(
    "/login",
    passport.authenticate("login", {
        successRedirect: "/home",
        failureRedirect: "/failLogin"
    })
);

authWebRouter.post(
    "/register",
    passport.authenticate("register", {
        successRedirect: "/login",
        failureRedirect: "/failRegister",
    })
);

module.exports.authWebRouter = authWebRouter;
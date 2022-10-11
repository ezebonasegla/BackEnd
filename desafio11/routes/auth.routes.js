import { Router } from "express";

import path from "path";

import passport from "passport";

export const authWebRouter = new Router();

authWebRouter.get('/', (req, res) => {
    res.redirect('/home')
})


authWebRouter.get("/login", (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect("/home");
    } else {
        res.render("login");
    }
})

authWebRouter.get("/register", (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/home')
    } else {
        res.render(path.join(process.cwd(), '/views/register.ejs'))
    }
})

authWebRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login')
})

authWebRouter.get('/failLogin', (req, res) => {
    res.render(path.join(process.cwd(), '/views/failLogin.ejs'))
})

authWebRouter.get('/failRegister', (req, res) => {
    res.render(path.join(process.cwd(), '/views/failRegister.ejs'))
})


authWebRouter.post(
    "/login",
    passport.authenticate("login", {
        successRedirect: "/home",
        failureRedirect: "/failLogin",
        failureFlash: true,
    })
);

authWebRouter.post(
    "/register",
    passport.authenticate("register", {
        successRedirect: "/login",
        failureRedirect: "/failRegister",
    })
);
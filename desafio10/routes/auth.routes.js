import {
    Router
} from "express";

import path from "path";

export const authWebRouter = new Router();

authWebRouter.get('/', (req, res) => {
    res.redirect('/home')
})


authWebRouter.get("/login", (req, res) => {
    const nombre = req.session?.nombre
    if (nombre) {
        res.redirect('/')
    } else {
        res.render(path.join(process.cwd(), '/views/login.ejs'))
    }
})

authWebRouter.get('/logout', (req, res) => {
    let username = req.session.nombre
    req.session.destroy((err) => {
        if (err) {
            return res.json({
                status: "Logout ERROR",
                body: err
            });
        }
        res.render("logout", {
            nombre: username
        });

    })
})


authWebRouter.post('/login', (req, res) => {
    req.session.nombre = req.body.nombre
    res.redirect('/home')
})
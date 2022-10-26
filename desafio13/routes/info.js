'use strict';
const {
    Router: Router
} = require('express');
const os = require('os');
const numCPUs = os.cpus().length;

const infoWebRouter = new Router();

infoWebRouter.get("/info", (req, res) => {
    res.render("info", {
        numCPUs: numCPUs
    })
});

module.exports.infoWebRouter = infoWebRouter;
'use strict';
const {
  Router: Router
} = require('express');

const {
  checkAuth: checkAuth
} = require('../middlewares/auth.js');

const path = require('path');

const homeRouter = new Router();

homeRouter.get("/home", checkAuth, (req, res) => {
  res.render(path.join(process.cwd(), '/views/home.ejs'), {
    username: req.user.username,
  })
});

module.exports.homeRouter = homeRouter;
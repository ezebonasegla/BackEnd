import {
  Router
} from 'express';

import {
  webAuth
} from '../middlewares/auth.js';

import path from 'path';

export const homeRouter = new Router();

homeRouter.get("/home", webAuth, (req, res) => {
  res.render(path.join(process.cwd(), '/views/home.ejs'), {
    nombre: req.session.nombre
  })
});
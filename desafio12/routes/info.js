import { Router } from "express";
import { apiRandomController } from "../controllers/apiRandom.controller.js";
export const infoWebRouter = new Router();

infoWebRouter.get("/info", (req, res) => {
    res.render("info");
});

infoWebRouter.get("/api/randoms", apiRandomController.get);

infoWebRouter.post("/api/randoms", apiRandomController.post);
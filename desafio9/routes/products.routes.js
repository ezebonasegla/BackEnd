//Requires
import { Router } from "express";
import * as productController from "../controllers/product.controller.js";
export const router = Router();

router.get("/:id?", productController.getData);

router.post("/", productController.addData);

router.put("/:id", productController.updateData);

router.delete("/:id", productController.delData);

'use strict';
//Requires
const {
  Router: Router
} = require('express');
const productFakeController = require("../controllers/productFake.controller.js");
const router = Router();

router.get("/", productFakeController.getData);

module.exports.router = router;

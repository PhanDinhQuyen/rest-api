const express = require("express");
const productCtrl = require("../controllers/productCtrl");
const router = express.Router();

router.get("/products", productCtrl.getAllProduct);

router.get("/products/:id", productCtrl.getProduct);

router.post("/products", productCtrl.addProduct);

router.put("/products/:id", productCtrl.putProduct);

router.delete("/products/:id", productCtrl.deleteProduct);

module.exports = router;

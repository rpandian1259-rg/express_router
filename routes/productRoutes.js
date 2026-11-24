const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers");

//get API
router.get("/",productControllers.getAllProducts);
router.post("/",productControllers.creatProduct);
router.get("/:id",productControllers.getProductBYId);
router.put("/:id",productControllers.updateProduct);
router.delete("/:id",productControllers.deleteProduct);


module.exports = router;

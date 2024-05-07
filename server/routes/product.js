import { Router } from "express";
import { addProduct, editProduct, deleteProduct } from "../controllers/product.js";

const router = Router();

// Route for adding a product
router.post("/addProduct", addProduct);

// Route for editing a product
router.put("/editProduct/:id", editProduct);

// Route for deleting a product
router.delete("/deleteProduct/:id", deleteProduct);

export default router;

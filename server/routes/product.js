import { Router } from "express";
import { addProduct, editProduct, deleteProduct } from "../controllers/product.js";
const router = Router();
// Route for adding a product
router.post("/add-product", addProduct);
// Route for editing a product
router.put("/edit-product/:id", editProduct);
// Route for deleting a product
router.delete("/delete-product/:id", deleteProduct);

export default router;

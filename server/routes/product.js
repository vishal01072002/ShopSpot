import { Router } from "express";
import { addProduct, editProduct, deleteProduct, getProducts, getProduct} from "../controllers/product.js";

const router = Router();

// Route for adding a product
router.post("/addProduct", addProduct);

// Route for editing a product
router.put("/editProduct/:id", editProduct);

// Route for deleting a product
router.delete("/deleteProduct/:id", deleteProduct);

// Route for all products
router.post("/getProducts", getProducts);

// Route for one product
router.post("/getProduct/:id", getProduct);

export default router;

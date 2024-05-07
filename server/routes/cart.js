import { Router } from "express";
import { addToCart, removeToCart} from "../controllers/cart.js";

const router = Router();

// Route for adding a product to cart
router.post("/addToCart", addToCart);

// Route for remove a product from cart
router.delete("/removeToCart", removeToCart);

export default router;

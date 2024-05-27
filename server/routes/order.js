import { Router } from "express";
import { createOrder, deleteOrder } from "../controllers/order.js";

const router = Router();

// Route for adding a product to cart
router.post("/createOrder", createOrder);

// Route for remove a product from cart
router.delete("/removeOrder", deleteOrder);

export default router;

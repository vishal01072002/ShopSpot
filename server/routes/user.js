import {Router} from "express";
const router = Router();

import {signup} from "../controllers/user.js";

// Route for user signup
router.post("/signup", signup);


export default router;
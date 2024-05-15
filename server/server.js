import express, { json } from "express";
import { connectDB } from "./config/database.js";
import { cloudinaryConnect } from "./config/cloudinary.js";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
// import Routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
const app = express();

// loading environment variables
config();

// Setting up port number
const PORT = process.env.PORT || 5000;

// middlewares

app.use(json());
app.use(cookieParser());

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:"/temp/",
}));

app.use(cors({
  origin: process.env.FRONTEND_LINK,
  credentials:true,    
}))

// connect with database
connectDB();

// connect cloudinary
cloudinaryConnect();


// mounting routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product",productRoute);
app.use("/api/v1/cart",cartRoute);
app.use("/api/v1/order",orderRoute);

// listen to server
app.listen(PORT, ()=> {
    console.log("server start at port",PORT);
});
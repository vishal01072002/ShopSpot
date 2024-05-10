import express, { json } from "express";
import { connectDB } from "./config/database.js";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import cors from "cors";
// import Routes
import userRoute from "./routes/user.js";
<<<<<<< HEAD

=======
import productRoute from "./routes/product.js";
>>>>>>> f56e537d701b95d7a7b71a317eb9bd1fd04d36f4
const app = express();

// loading environment variables
config();

// Setting up port number
const PORT = process.env.PORT || 5000;

// middlewares

app.use(json());
app.use(cookieParser());

app.use(cors({
  origin: process.env.FRONTEND_LINK,
  credentials:true,    
}))

// connect with database
connectDB();

// mounting routes
app.use("/api/v1/user", userRoute);
<<<<<<< HEAD


=======
app.use("api/v1/product",productRoute);
>>>>>>> f56e537d701b95d7a7b71a317eb9bd1fd04d36f4
// listen to server
app.listen(PORT, ()=> {
    console.log("server start at port",PORT);
});
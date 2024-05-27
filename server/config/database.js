import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export function connectDB() {
    connect(process.env.DATABASE_URL,{
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
    })
    .then(()=> {console.log("database connected sucessfully")})
    .catch( (error)=> {
        console.log("DB connection error ",error);
        process.exit(1);
    })
}
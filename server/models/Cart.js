import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    account:{
        type:String,
        enum:["User","Admin"],
    },
    cartProducts:[
        {
            type:Schema.Types.ObjectId,
            ref:"Product",
        },
    ],
},{timestamps:true});

export default model("Cart",CartSchema);
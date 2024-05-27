import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    account:{
        type:String,
        enum:["User","Admin"],
    },
    contactNumber:{
        type:Number
    },
    cart:{
        type:Schema.Types.ObjectId,
        ref:"Cart",
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            ref:"Product",
        },
    ],
},{timestamps:true});

export default model("User",UserSchema);
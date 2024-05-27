import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    productName:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
        trim:true,
    },
    category: {
        //array of strings
        type: String,
        trim: true,
        required: true,
        enum: [
            "APPAREL",
            "ELECTRONICS",
            "FOOTWEAR",
            "PERSONAL CARE",       
        ],
    },
    sellingPrice:{
        // in rupees
        type: Number,
        required: true,
        min: 1,
    },
    Mrp:{
        // in rupees
        type: Number,
        required: true,
        min: 1,
    },
    quantity:{
        // in rupees
        type: Number,
        required: true,
        min: 1,
    },
},{timestamps:true});

export default model("Product",ProductSchema);
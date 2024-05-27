import User from "../models/User.js";
import Cart from "../models/Cart.js";
import bcrypt from "bcrypt";

// @desc   signup to user
// route   POST api /user/signup
// access  Public
export async function signup(req,res) {
  try {
    const { firstName, lastName, email, password, confirmPassword, account, contactNumber} = req.body;

    // validations on data
    if (!firstName || !lastName || !email || !password || !confirmPassword || !contactNumber || !account) {
      return res.status(500).json({
        success: false,
        message: "please fill all details",
      });
    }
    
    // check passwords are matched
    if (password !== confirmPassword) {
        return res.status(500).json({
          success: false,
          message: "password not matched",
        });
    }

    // check user already exist or not
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(500).json({
        success: false,
        message: "user already exist",
      });
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // create user and save into DB
    const user = await User.create({
        firstName,
        lastName,
        email,
        password:hashPassword,
        account,
        contactNumber,
     });
    
    const newCart = await Cart.create({account});
    user.cart = newCart._id;
    await user.save();
    user.password = null;
    
    return res.status(200).json({
        success: true,
        message: "SignUp successful",
        user,
    })

  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "error in sign up",
        error:error.message,
    });
  }
}

// @desc   login to user
// route   POST api /user/login
// access  Public
export async function login(req,res) {
  try {
    const {email, password} = req.body;
    
    // validations on data
    if (!email || !password) {
      return res.status(500).json({
        success: false,
        message: "please fill all details",
      });
    }

    // check user exist or not
    const user = await User.findOne({email:email}).populate("cart").populate("products").exec();
    if(!user){
      return res.status(500).json({
          success: false,
          message: "invalid user email",
        });
    }

    // check passwords are matched or not
    if(await bcrypt.compare(password,user.password)){
      return res.status(200).json({
          success: true,
          user,
          message: "Login successful",
      });
    }
    else{
      return res.status(500).json({
          success: false,
          message: "password not matched",
      });
    }
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "error in login",
        error:error.message,
    });
  }

}


import Cart from "../models/Cart.js";
   
  // @desc   add to Cart
  // route   POST api cart/addToCart
  // access  Private

  export async function addToCart(req, res) {
    try {
        const {cartId, productId} = req.body;

        if(!productId || !cartId ){
            return res.status(404).json({ 
                success: false,
                message: 'Product/Cart Id not found' 
            });
        }

        const updatedCart = await Cart.findOneAndUpdate({_id:cartId},
                                                {$push:{
                                                    cartProducts:productId,
                                                }},{new:true});
        
        if(!updatedCart){
            return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
        }

        return res.status(200).json({
            success: true,
            cart: updatedCart,
            message: "Product added to cart successfully",
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'Failed to add to cart',
            error: error.message 
        });
    }
}

  // @desc   remove to Cart
  // route   POST api cart/removeToCart
  // access  Private

  export async function removeToCart(req, res) {
    try {
        const {cartId, productId} = req.body;

        if(!productId || !cartId ){
            return res.status(404).json({ 
                success: false,
                message: 'Product/Cart Id not found' 
            });
        }

        const updatedCart = await Cart.findOneAndUpdate({_id:cartId},
                                                {$pull:{
                                                    cartProducts:productId,
                                                }},{new:true});
        
        if(!updatedCart){
            return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
        }

        return res.status(200).json({
            success: true,
            cart: updatedCart,
            message: "Product removed to cart successfully",
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'Failed to remove from cart',
            error: error.message 
        });
    }
}

import Product from "../models/Product.js";
   
  // @desc   add product
  // route   POST api product/addProduct
  // access  Private

  export async function addProduct(req, res) {
    try {
        const { productName, description, image, category, sellingPrice, Mrp, quantity } = req.body;

        if(!productName || !category || !sellingPrice || !Mrp || !quantity){
            return res.status(404).json({ 
                success: false,
                message: 'fill all detail of Product' 
            });
        }

        if(!description){
            description = "";
        }

        const productPic = req?.files?.productPicture;
        if(!productPic){
            return res.status(404).json({
                success: false,
                message: "file not found in body",
            });
        }

        const img = await cloudinaryFileUpload(
            productPic,
            process.env.FOLDER_NAME,
            1000,
            100,
        );

        const product = new Product({
            productName,
            description,
            image,
            category,
            sellingPrice,
            Mrp,
            quantity
        });
        const savedProduct = await product.save();
        return res.status(200).json({
            success: true,
            product: savedProduct,
            message: "Product added successfully",
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'Failed to add product',
            error: error.message 
        });
    }
}

  // @desc   edit product
  // route   PUT api product/editProduct
  // access  Private

  export async function editProduct (req, res) {
    try {
        const productId = req.params.id;

        const { productName, description, image, category, sellingPrice, Mrp, quantity } = req.body;

        if(!productId){
            return res.status(404).json({ 
                success: false,
                message: 'ProductId not found' 
            });
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            productName,
            description,
            image,
            category,
            sellingPrice,
            Mrp,
            quantity
        },{ new: true });

        if (!updatedProduct) {
            return res.status(404).json({ 
                success: false,
                message: 'Product not found' 
            });
        }
        return res.status(200).json({ 
            success: true,
            message: 'Product edited successfully', 
            product: updatedProduct 
        });
    } catch (error) {
        return res.status(500).json({ 
            success : false,
            message: 'Failed to edit product', 
            error: error.message 
        });
    }
}

  // @desc   delete product
  // route   DELETE api product/deleteProduct
  // access  Private

  export async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;

        if(!productId){
            return res.status(404).json({ 
                success: false,
                message: 'ProductId not found' 
            });
        }

        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ 
                success: false,
                message: 'Product not found' 
            });
        }
        return res.status(200).json({ 
            success: true,
            message: 'Product deleted successfully' 
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'Failed to delete product',
            error: error.message 
        });
    }
}

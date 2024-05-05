const express = require('express');
const router = express.Router();
const Product = require('./models/Product');
router.post('/add-product', async (req, res) => {
    try {
        const { productName, description, image, category, sellingPrice, Mrp, quantity } = req.body;
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
        res.json({ message: 'Product added successfully', product: savedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add product', error: error.message });
    }
});
router.put('/edit-product/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const { productName, description, image, category, sellingPrice, Mrp, quantity } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            productName,
            description,
            image,
            category,
            sellingPrice,
            Mrp,
            quantity
        }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product edited successfully', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Failed to edit product', error: error.message });
    }
});
router.delete('/delete-product/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product', error: error.message });
    }
});
module.exports = router;
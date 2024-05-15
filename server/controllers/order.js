import Order from '../models/Order.js';

export async function createOrder(req, res) {
    try {
        const { firstName, lastName, email, contactNumber, street, city, state, zip, productId } = req.body;

        if (!firstName || !lastName || !email || !contactNumber || !street || !city || !state || !zip || !productId) {
            return res.status(400).json({ 
                success: false,
                message: 'Please fill all details of the order' 
            });
        }

        const order = await Order.create({firstName, lastName, email, contactNumber, street, city, state, zip, productId});

        return res.status(200).json({
            success: true,
            order: order,
            message: "Order added successfully",
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'Failed to add order',
            error: error.message 
        });
    }
}

export async function deleteOrder(req, res) {
    try {
        const { orderId } = req.params;

        if (!orderId) {
            return res.status(400).json({ 
                success: false,
                message: 'Order ID is required' 
            });
        }

        const deletedOrder = await Order.findByIdAndDelete(orderId);
        
        if (!deletedOrder) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Order deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'Failed to delete order',
            error: error.message 
        });
    }
}

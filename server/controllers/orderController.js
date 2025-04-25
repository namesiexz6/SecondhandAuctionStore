const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();



exports.addOrder = async (req, res) => {
    const { user_id, product_id, orderStatus, final_price_product, paymentType, address, phone } = req.body; // added paymentType
    try {
        const order = await prisma.order.create({
            data: {
                user_id: parseInt(user_id),
                product_id: parseInt(product_id),
                orderStatus: parseInt(orderStatus),
                final_price_product: parseFloat(final_price_product),
                total_price: parseFloat(final_price_product),
                address,
                phone,
                paymentType: parseInt(paymentType), // added paymentType

            },
        });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            include: {
                user: true,
                product: true,
            },
        });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getOrderByUser = async (req, res) => {
    const { user_id } = req.params; 
    try {
        const orders = await prisma.order.findMany({
            where: { user_id: parseInt(user_id) }, 
            include: {
                user: true,
                product: true,
            },
        });
       
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateOrderStatus = async (req, res) => {
    const { order_id } = req.params;
    const { orderStatus } = req.body;
    try {
        const orderItem = await prisma.order.update({
            where: { id: parseInt(order_id) },
            data: { orderStatus: parseInt(orderStatus) },
        });
        res.json({ message: "Order status updated successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteOrder = async (req, res) => {
    const { order_id } = req.params;
    try {
        const orderItem = await prisma.order.delete({
            where: { id: parseInt(order_id) },
        });
        res.json({ message: "Order deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
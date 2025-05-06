const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

exports.addOrder = async (req, res) => {
    const { user_id, orderStatus, total_price, paymentType, address, phone, products } = req.body; // products: [{product_id, final_price_product}]
    try {
        await prisma.$transaction(async (tx) => {
            const order = await tx.order.create({
                data: {
                    user_id: parseInt(user_id),
                    orderStatus: parseInt(orderStatus),
                    total_price: parseFloat(total_price),
                    address,
                    phone,
                    paymentType: parseInt(paymentType),
                },
            });
            // ลูปสร้าง ProductOnOrder ทีละชิ้น
            for (const p of products) {
                await tx.productOnOrder.create({
                    data: {
                        product_id: parseInt(p.product_id),
                        order_id: order.id,
                        final_price_product: parseFloat(p.final_price_product),
                    },
                });
            }
            for (const p of products) {
                // อัพเดทสถานะของ Product เป็น false
                await tx.product.update({
                    where: { id: parseInt(p.product_id) },
                    data: {
                        status: false,
                    },
                });
                // ลบ ProductOnCart ที่มี product_id ตรงกัน
                await tx.cart.deleteMany({
                    where: {
                        user_id: parseInt(user_id),
                        product_id: parseInt(p.product_id),
                    },
                });
            }
            res.json({ order });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            include: {
                user: true,
                products: {
                    include: {
                        product: true,
                    },
                },
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
                products: {
                    include: {
                        product: true,
                    },
                },
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
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();


exports.UpdateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, picture, enabled, adress, phone } = req.body;

    try {
        const data = {};
        if (name !== undefined) data.name = name;
        if (email !== undefined) data.email = email;
        if (password !== undefined) data.password = password;
        if (picture !== undefined) data.picture = picture;
        if (enabled !== undefined) data.enabled = enabled;
        if (adress !== undefined) data.adress = adress;
        if (phone !== undefined) data.phone = phone;

        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data,
        });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}




exports.GetCart = async (req, res) => {
    const {user_id} = req.params;
    try {
        const cart = await prisma.cart.findMany({
            where: { user_id: parseInt(user_id) },
            include: {
                product: true, // Include related products
            },
        });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addToCart = async (req, res) => {
    const { user_id, product_id, final_price_product } = req.body;
    const duedate = new Date();
    duedate.setDate(duedate.getDate() + 1); // Set due date to 1 days from now
    try {
        const cartItem = await prisma.cart.create({
            data: {
                user_id: parseInt(user_id),
                product_id: parseInt(product_id),
                final_price_product: parseFloat(final_price_product),
                due_date: duedate,
                cartprice: parseFloat(final_price_product),
            },
        });
        res.json({ message: "added to cart"}, cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteFromCart = async (req, res) => {
    const { cart_id } = req.params;
    try {
        const cartItem = await prisma.cart.delete({
            where: { id: parseInt(cart_id) },
        });
        res.json({ message: "deleted from cart"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.makeOrder = async (req, res) => {
    const { user_id, product_id, adress, phone } = req.body;
    const { final_price_product } = await prisma.product.findUnique({
        where: { product_id: parseInt(product_id) },
        select: { final_price_product: true },
    });
    try {
        const orderItem = await prisma.order.create({
            data: {
                user_id: parseInt(user_id),
                product_id: parseInt(product_id),
                final_price_product: final_price_product,
                total_price: final_price_product,
                address: adress,
                phone: phone,
                orderStatus: 1,
                paymentType: 1,
            },
        });
        res.json({ message: "Your order has been placed successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.getOrderByUser = async (req, res) => {
    const { user_id } = req.params;
    try {
        const orders = await prisma.order.findMany({
            where: { user_id: parseInt(user_id) },
        });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

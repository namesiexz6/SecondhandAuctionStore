const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getCart = async (req, res) => {
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

exports.addCart = async (req, res) => {
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

exports.deleteCart = async (req, res) => {
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
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

/**
 * Admin Controller for E-commerce Platform
 * Handles admin-side operations for users, categories, products, images, carts, auctions, and orders.
 * Assumes usage of an ORM like Sequelize or Prisma.
 */


// ========== USER MANAGEMENT ==========

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.ChangeUserRole = async (req, res) => {
    const {id} = req.params
    const {role} = req.body;

    try {
        
        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {role},
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 


exports.DeleteUser = async (req, res) => {
    const {id} =req.params;
    try{
        const user = await prisma.user.delete(
            {where:{id:parseInt(id)}}
        );
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({ err : err.message})
    }

}


exports.addCategory = async (req, res) => {
    const{name}= req.body;
    try {
        const category = await prisma.category.create({
            data: { name },
        });
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
}

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateCategory = async (req, res) => {
    const { category_id } = req.params;
    const { name } = req.body;
    try {
        const category = await prisma.category.update({
            where: { id: parseInt(category_id) },
            data: { name },
        });
        res.json({ message: "Category updated successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteCategory = async (req, res) => {
    const { category_id } = req.params;
    try {
        const category = await prisma.category.delete({
            where: { id: parseInt(category_id) },
        });
        res.json({ message: "Category deleted successfully." });
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
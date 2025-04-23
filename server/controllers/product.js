const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

exports.getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                category: true, // Include related categories
                images: true, // Include related images
            },
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addProduct = async (req, res) => {
    const { name, size, description, condition, starting_price, category_id, status, start_date, end_date } = req.body; // corrected 'srarting_price' to 'starting_price'
    
    try {
        const product = await prisma.product.create({
            data: {
                name,
                size,
                description,
                condition: parseFloat(condition),
                starting_price: parseFloat(starting_price),
                category_id: parseInt(category_id),
                status,
                start_date, //date format should be YYYY-MM-DD
                end_date,
            },
        });
        res.json({message: "Product added successfully."});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateProduct = async (req, res) => {
    const { product_id } = req.params;
    const { name, size, description, condition, starting_price, category_id, status, start_date, end_date } = req.body; // corrected 'srarting_price' to 'starting_price'
    
    try {
        const product = await prisma.product.update({
            where: { id: parseInt(product_id) },
            data: {
                name,
                size,
                description,
                condition: parseFloat(condition),
                starting_price: parseFloat(starting_price),
                category_id: parseInt(category_id),
                status,
                start_date, //date format should be YYYY-MM-DD
                end_date,
            },
        });
        res.json({message: "Product updated successfully."});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteProduct = async (req, res) => {
    const { product_id } = req.params;
    try {
        const product = await prisma.product.delete({
            where: { id: parseInt(product_id) },
        });
        res.json({ message: "Product deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


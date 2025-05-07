const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();


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
        res.json(category);
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



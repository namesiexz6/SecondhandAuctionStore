const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany(
            // { where: {
            //     role: { not: 1 },
            // }}
        );
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, picture, enabled, address, phone } = req.body;

    try {
        const data = {};
        if (name !== undefined) data.name = name;
        if (email !== undefined) data.email = email;
        if (password !== undefined) data.password = password;
        if (picture !== undefined) data.picture = picture;
        if (enabled !== undefined) data.enabled = enabled;
        if (address !== undefined) data.address = address;
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


exports.deleteUser = async (req, res) => {
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


exports.changeUserRole = async (req, res) => {
    const {id} = req.params
    const {role, enabled} = req.body;

    try {
        
        const user = await prisma.user.update({
            where: { id: parseInt(id)},
            data: {role: parseInt(role), enabled},
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 



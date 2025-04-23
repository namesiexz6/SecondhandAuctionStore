const { PrismaClient } = require('../generated/prisma');
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

exports.checkLogin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: "Unauthorized: No token provided." });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: No token provided." });
        }
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({ error: "Unauthorized: Invalid token." });
        }
        req.user = await prisma.user.findUnique({ where: { id: decoded.id } });
        if (!req.user || !req.user.enabled) {
            return res.status(403).json({ error: "Forbidden: User is disabled." });
        }
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error." });
    }
};

exports.checkAdmin = (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized: No user found." });
        }

        if (req.user.role !== 1) {
            return res.status(403).json({ error: "Forbidden: User is not an admin." });
        }

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error." });
    }
};

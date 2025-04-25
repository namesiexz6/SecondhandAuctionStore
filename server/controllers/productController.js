const { PrismaClient } = require('../generated/prisma');
const cloudinary = require('cloudinary').v2;
const prisma = new PrismaClient();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                category: true, // Include related categories
                images: true, // Include related images
                auctioneerBoards: true, // Include related auctioneer boards
            },
            orderBy: {
                end_date: 'asc', // Order by end date in ascending order
            },
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addProduct = async (req, res) => {
    const { name, size, description, condition, starting_price, min_bid_price, category_id, status, start_date, end_date } = req.body; // corrected 'srarting_price' to 'starting_price'
    
    try {
        const product = await prisma.product.create({
            data: {
                name,
                size,
                description,
                condition: parseFloat(condition),
                starting_price: parseFloat(starting_price),
                min_bid_price: parseFloat(min_bid_price),
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
    const { name, size, description, condition, starting_price, min_bid_price, category_id, status, start_date, end_date } = req.body; // corrected 'srarting_price' to 'starting_price'
    
    try {
        const product = await prisma.product.update({
            where: { id: parseInt(product_id) },
            data: {
                name,
                size,
                description,
                condition: parseFloat(condition),
                starting_price: parseFloat(starting_price),
                min_bid_price: parseFloat(min_bid_price),
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

exports.addProductImage = async (req, res) => {
    const { product_id } = req.params;
    const { FileImage } = req.body; 

    if(!Array.isArray(FileImage) || FileImage.length === 0) {
        return res.status(400).json({ error: "FileImage must be a non-empty array." });
    }
    try {
        for (const image of FileImage) {
            const result = await cloudinary.uploader.upload(image, {
                folder: "product_images",
                use_filename: true,
                unique_filename: false,
            });

            // Save the image URL to the database
            await prisma.imageProduct.create({
                data: {
                    asset_id: result.asset_id,
                    public_id: result.public_id,
                    url: result.url,
                    secure_url: result.secure_url,
                    product_id: parseInt(product_id),
                },
            });

        
        }

        res.json({ message: "Image added successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteProductImage = async (req, res) => {
    const { product_id } = req.params;
    const images = await prisma.imageProduct.findMany({
        where: { product_id: parseInt(product_id) },
        select: { public_id: true },
    });
   
   
    try {
        // console.log(images);
        // console.log(images.map(image => image.public_id));
        // Delete the image from Cloudinary
        for (const image of images) {
            await cloudinary.uploader.destroy(image.public_id);
        }

        // Delete the image record from the database
        await prisma.imageProduct.deleteMany({
            where: { product_id: parseInt(product_id) },
        });

        res.json({ message: "Image deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
   
}


const searchProduct = async (req, res, search) => {

    try {
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: search,
                    mode: 'insensitive',
                },
    
            },
            include: {
                category: true,
                images: true,
                auctioneerBoards: true,
            },
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchProductByCategory = async (req, res, category_id) => {
    try {
        const products = await prisma.product.findMany({
            where: {
                category_id:{
                    in: category_id.map((id) => parseInt(id)),
                },
            },
            include: {
                category: true,
                images: true,
                auctioneerBoards: true,
            },
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchProductByPrice = async (req, res, priceRange) => {

    try {
        const products = await prisma.product.findMany({
            where: {
                auctioneerBoards: {
                    price_offer: {
                        gte: parseFloat(priceRange[0]),
                        lte: parseFloat(priceRange[1]),
                    },
                    orderBy: {
                        price_offer: 'desc', // Order by price in descending order
                    },
                    //take 1 if duplicate product id
                    distinct: ['product_id'],
                    
                },
            },
            include: {
                category: true,
                images: true,
                auctioneerBoards: true,
            },
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.filterSearchProduct = async (req, res) => {

    const { search, category_id, priceRange } = req.body;
    try {
       if (search){
         await searchProduct(req, res, search);
       }
       if (category_id) {
         await searchProductByCategory(req, res, category_id);
       }

       if (priceRange) {
         await searchProductByPrice(req, res,prceRange);
       }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAuctioneerBoard = async (req, res) => {
    const { product_id } = req.params;
    try {
        const auctioneerBoard = await prisma.auctioneer_Board.findMany({
            where: { product_id: parseInt(product_id) },
            orderBy: {
                price_offer: 'desc', // Order by price in descending order
                take: 5, // Take the highest price offer
            },
            include: {
                user: true, // Include related users
            },
        });
        res.json(auctioneerBoard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addAuctioneerBoard = async (req, res) => {
    const { product_id, user_id, price_offer } = req.body;
    try {
        const auctioneerBoard = await prisma.auctioneer_Board.create({
            data: {
                product_id: parseInt(product_id),
                user_id: parseInt(user_id),
                price_offer: parseFloat(price_offer),
            },
        });
        res.json({ message: "Auctioneer board added successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
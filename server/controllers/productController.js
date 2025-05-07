const { PrismaClient } = require('../generated/prisma');
const cloudinary = require('cloudinary').v2;
const prisma = new PrismaClient();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.getAllProducts = async (req, res) => {
    const number = parseInt(req.query.number) || 10; // Get the page number from query params, default to 10
    try {
        const products = await prisma.product.findMany({
            where: {
                status: true, // Filter products by status
                end_date: {
                    gte: new Date(), // Filter products that are not expired
                },
            },
            include: {
                category: true, // Include related categories
                images: true, // Include related images
                auctioneerBoards: {
                    orderBy: { 
                        price_offer: 'desc', // Order by price in descending order
                    },
                    include: {
                        user: true, // Include related users
                    },
                    take: 5, // Limit to the latest auctioneer board
                }, 
            },
            orderBy: {
                end_date: 'asc', // Order by end date in ascending order
            },
            take: number, // Limit the number of products returned
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAllProductsAdmin = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                category: true, // Include related categories
                images: true, // Include related images
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
    const { name, size, description, condition, starting_price, min_bid_price, category_id, start_date, end_date } = req.body;
    
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
                status: true,
                start_date: new Date(start_date), //date format should be YYYY-MM-DD
                end_date: new Date(end_date), //date format should be YYYY-MM-DD
            },
        });
        res.json(product);
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
                start_date: new Date(start_date), //date format should be YYYY-MM-DD
                end_date: new Date(end_date), //date format should be YYYY-MM-DD
            },
        });
        res.json(product);
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
        const images = []; 
        for (const image of FileImage) {
            const result = await cloudinary.uploader.upload(image, {
                folder: "product_images",
                use_filename: true,
                unique_filename: false,
            });

            // Save the image URL to the database
            const savedImage = await prisma.imageProduct.create({
                data: {
                    asset_id: result.asset_id,
                    public_id: result.public_id,
                    url: result.url,
                    secure_url: result.secure_url,
                    product_id: parseInt(product_id),
                },
            });
            images.push(savedImage);
        }

        
        res.json(images);
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


exports.filterSearchProduct = async (req, res) => {
    const { search, category_id, priceRange } = req.body;
    try {
        // สร้าง where object ตาม filter ที่ส่งมา
        let where = {
            status: true,
            end_date: {
                gte: new Date(),
            },
        };
        if (search) {
            where.name = {
                contains: search,
            };
        }
        if (category_id && Array.isArray(category_id) && category_id.length > 0) {
            where.category_id = {
                in: category_id.map((id) => parseInt(id)),
            };
        }
        if (priceRange && priceRange.length === 2) {
            where.auctioneerBoards = {
                some: {
                    price_offer: {
                        gte: parseFloat(priceRange[0]),
                        lte: parseFloat(priceRange[1]),
                    },
                },
            };
        }
        const products = await prisma.product.findMany({
            where,
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

exports.getUserAuct = async (req, res) => {
    const { user_id } = req.params;
    try {
        const auctioneerBoard = await prisma.auctioneer_Board.findMany({
            where: { user_id: parseInt(user_id) },
            orderBy: {
                price_offer: 'desc', // Order by price in descending order
            },
            include: {
                product: {
                    include: {
                        images: true, // Include related images
                        auctioneerBoards: {
                            orderBy: { 
                                price_offer: 'desc', // Order by price in descending order
                            },    
                            take: 1, // Limit to the latest auctioneer board
                        },
                    }
                }
               
            },
            distinct: ['product_id'], // Distinct by product_id
            
        });
          // เรียงตาม createdAt (ล่าสุดอยู่บน)
        auctioneerBoard.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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
        res.json(auctioneerBoard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
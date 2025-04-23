/*
  Warnings:

  - You are about to drop the column `cartTotal` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_id]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `total_price` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `auctioneer_board` DROP FOREIGN KEY `Auctioneer_Board_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `auctioneer_board` DROP FOREIGN KEY `Auctioneer_Board_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `imageproduct` DROP FOREIGN KEY `ImageProduct_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_category_id_fkey`;

-- DropIndex
DROP INDEX `Auctioneer_Board_product_id_fkey` ON `auctioneer_board`;

-- DropIndex
DROP INDEX `Auctioneer_Board_user_id_fkey` ON `auctioneer_board`;

-- DropIndex
DROP INDEX `Cart_product_id_fkey` ON `cart`;

-- DropIndex
DROP INDEX `Cart_user_id_fkey` ON `cart`;

-- DropIndex
DROP INDEX `ImageProduct_product_id_fkey` ON `imageproduct`;

-- DropIndex
DROP INDEX `Order_product_id_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_user_id_fkey` ON `order`;

-- DropIndex
DROP INDEX `Product_category_id_fkey` ON `product`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `cartTotal`,
    DROP COLUMN `product_id`,
    ADD COLUMN `cart_id` INTEGER NULL,
    ADD COLUMN `total_price` DOUBLE NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Cart_product_id_key` ON `Cart`(`product_id`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImageProduct` ADD CONSTRAINT `ImageProduct_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auctioneer_Board` ADD CONSTRAINT `Auctioneer_Board_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auctioneer_Board` ADD CONSTRAINT `Auctioneer_Board_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `Cart`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

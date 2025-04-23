/*
  Warnings:

  - You are about to drop the column `cart_id` on the `order` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_cart_id_fkey`;

-- DropIndex
DROP INDEX `Order_cart_id_fkey` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `cart_id`,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

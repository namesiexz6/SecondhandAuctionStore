/*
  Warnings:

  - You are about to drop the column `final_price_product` on the `order` table. All the data in the column will be lost.
  - Added the required column `final_price_product` to the `ProductOnOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `final_price_product`;

-- AlterTable
ALTER TABLE `productonorder` ADD COLUMN `final_price_product` DOUBLE NOT NULL;

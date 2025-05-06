-- AlterTable
ALTER TABLE `product` MODIFY `description` TEXT NOT NULL,
    MODIFY `description_condition` TEXT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `address` TEXT NULL;

/*
  Warnings:

  - You are about to drop the `_GameList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_GameList` DROP FOREIGN KEY `_GameList_A_fkey`;

-- DropForeignKey
ALTER TABLE `_GameList` DROP FOREIGN KEY `_GameList_B_fkey`;

-- DropTable
DROP TABLE `_GameList`;

-- CreateTable
CREATE TABLE `ListOnGame` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `listId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,

    UNIQUE INDEX `ListOnGame_listId_gameId_key`(`listId`, `gameId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ListOnGame` ADD CONSTRAINT `ListOnGame_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListOnGame` ADD CONSTRAINT `ListOnGame_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

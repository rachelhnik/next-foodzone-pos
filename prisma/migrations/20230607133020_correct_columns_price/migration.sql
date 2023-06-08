/*
  Warnings:

  - You are about to drop the column `price` on the `menu_addoncategories` table. All the data in the column will be lost.
  - Added the required column `price` to the `menus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menu_addoncategories" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "price" INTEGER ;

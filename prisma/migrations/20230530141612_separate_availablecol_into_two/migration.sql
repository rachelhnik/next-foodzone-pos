/*
  Warnings:

  - You are about to drop the column `is_available` on the `branches_menucategories_menus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "branches_menucategories_menus" DROP COLUMN "is_available",
ADD COLUMN     "is_available_menu" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_available_menucategory" BOOLEAN NOT NULL DEFAULT true;

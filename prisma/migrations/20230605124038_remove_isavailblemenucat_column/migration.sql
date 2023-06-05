/*
  Warnings:

  - You are about to drop the column `is_available_menu` on the `branches_menucategories_menus` table. All the data in the column will be lost.
  - You are about to drop the column `is_available_menucategory` on the `branches_menucategories_menus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "branches_menucategories_menus" DROP COLUMN "is_available_menu",
DROP COLUMN "is_available_menucategory",
ADD COLUMN     "is_available" BOOLEAN NOT NULL DEFAULT true;

/*
  Warnings:

  - You are about to drop the `branches_menus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `menus_menu_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "branches_menus" DROP CONSTRAINT "location_menus_menu_id_fkey";

-- DropForeignKey
ALTER TABLE "menus_menu_categories" DROP CONSTRAINT "menus_menu_categories_menu_categories_id_fkey";

-- DropForeignKey
ALTER TABLE "menus_menu_categories" DROP CONSTRAINT "menus_menu_categories_menus_id_fkey";

-- DropTable
DROP TABLE "branches_menus";

-- DropTable
DROP TABLE "menus_menu_categories";

-- CreateTable
CREATE TABLE "branches_menucategories_menus" (
    "id" SERIAL NOT NULL,
    "menu_id" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "menucategory_id" INTEGER NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "location_menus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "branches_menucategories_menus" ADD CONSTRAINT "location_menus_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "branches_menucategories_menus" ADD CONSTRAINT "branches_menucategories_menus_menucategory_id_fkey" FOREIGN KEY ("menucategory_id") REFERENCES "menu_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "branches_menucategories_menus" ADD CONSTRAINT "branches_menucategories_menus_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

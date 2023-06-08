/*
  Warnings:

  - You are about to drop the `_addon_categoriesTomenu_addons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `menu_addons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_addon_categoriesTomenu_addons" DROP CONSTRAINT "_addon_categoriesTomenu_addons_A_fkey";

-- DropForeignKey
ALTER TABLE "_addon_categoriesTomenu_addons" DROP CONSTRAINT "_addon_categoriesTomenu_addons_B_fkey";

-- DropForeignKey
ALTER TABLE "menu_addons" DROP CONSTRAINT "menu_addons_addon_id_fkey";

-- DropForeignKey
ALTER TABLE "menu_addons" DROP CONSTRAINT "menu_addons_menu_id_fkey";

-- DropTable
DROP TABLE "_addon_categoriesTomenu_addons";

-- DropTable
DROP TABLE "menu_addons";

-- CreateTable
CREATE TABLE "menu_addoncategories" (
    "id" SERIAL NOT NULL,
    "menu_id" INTEGER NOT NULL,
    "addoncategory_id" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "menu_addoncategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "menu_addoncategories" ADD CONSTRAINT "menu_addoncategories_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_addoncategories" ADD CONSTRAINT "menu_addoncategories_addoncategory_id_fkey" FOREIGN KEY ("addoncategory_id") REFERENCES "addon_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

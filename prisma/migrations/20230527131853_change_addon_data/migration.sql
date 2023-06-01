/*
  Warnings:

  - You are about to drop the column `price` on the `addons` table. All the data in the column will be lost.
  - You are about to drop the `menus_addoncats_addons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "menus_addoncats_addons" DROP CONSTRAINT "menus_addon_categories_addon_categories_id_fkey";

-- DropForeignKey
ALTER TABLE "menus_addoncats_addons" DROP CONSTRAINT "menus_addon_categories_menus_id_fkey";

-- DropForeignKey
ALTER TABLE "menus_addoncats_addons" DROP CONSTRAINT "menus_addoncats_addons_addons_id_fkey";

-- AlterTable
ALTER TABLE "addons" DROP COLUMN "price";

-- DropTable
DROP TABLE "menus_addoncats_addons";

-- CreateTable
CREATE TABLE "menu_addons" (
    "id" SERIAL NOT NULL,
    "menu_id" INTEGER NOT NULL,
    "addon_id" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "menu_addons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_addon_categoriesTomenu_addons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_addon_categoriesTomenu_addons_AB_unique" ON "_addon_categoriesTomenu_addons"("A", "B");

-- CreateIndex
CREATE INDEX "_addon_categoriesTomenu_addons_B_index" ON "_addon_categoriesTomenu_addons"("B");

-- AddForeignKey
ALTER TABLE "menu_addons" ADD CONSTRAINT "menu_addons_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_addons" ADD CONSTRAINT "menu_addons_addon_id_fkey" FOREIGN KEY ("addon_id") REFERENCES "addons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_addon_categoriesTomenu_addons" ADD CONSTRAINT "_addon_categoriesTomenu_addons_A_fkey" FOREIGN KEY ("A") REFERENCES "addon_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_addon_categoriesTomenu_addons" ADD CONSTRAINT "_addon_categoriesTomenu_addons_B_fkey" FOREIGN KEY ("B") REFERENCES "menu_addons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

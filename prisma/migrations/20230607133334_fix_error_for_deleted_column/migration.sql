/*
  Warnings:

  - Made the column `price` on table `menus` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "menus" ALTER COLUMN "price" SET NOT NULL;

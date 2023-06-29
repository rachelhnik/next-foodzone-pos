-- AlterTable
ALTER TABLE "addons" ALTER COLUMN "price" DROP NOT NULL;

-- AlterTable
ALTER TABLE "orderlines" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "addons_id" DROP NOT NULL;

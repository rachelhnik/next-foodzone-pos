-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PREPARING', 'COMPLETE');

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "table_id" INTEGER NOT NULL,
    "order_status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "is_paid" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderlines" (
    "id" SERIAL NOT NULL,
    "orders_id" INTEGER NOT NULL,
    "menus_id" INTEGER NOT NULL,
    "addons_id" INTEGER NOT NULL,

    CONSTRAINT "orderlines_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_table_id_fkey" FOREIGN KEY ("table_id") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderlines" ADD CONSTRAINT "orderlines_orders_id_fkey" FOREIGN KEY ("orders_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderlines" ADD CONSTRAINT "orderlines_menus_id_fkey" FOREIGN KEY ("menus_id") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderlines" ADD CONSTRAINT "orderlines_addons_id_fkey" FOREIGN KEY ("addons_id") REFERENCES "addons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

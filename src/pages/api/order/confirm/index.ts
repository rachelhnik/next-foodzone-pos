import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { branchId, tableId } = req.query;
    const { cart } = req.body;

    const newOrder = await prisma.orders.create({
        data: {
            branch_id: Number(branchId),
            table_id: Number(tableId),
        },
    });

    cart.forEach(async (cartitem: any) => {
        const menu = cartitem.menu;
        const quantity = cartitem.quantity;
        const hasAddons = cartitem.addons.length;
        if (hasAddons) {
            const addons = cartitem.addons;

            const orderlineData = addons.map((item: any) => ({
                menus_id: menu.id,
                addons_id: item.id,
                orders_id: newOrder.id,
                quantity: quantity,
            }));
            await prisma.orderlines.createMany({ data: orderlineData });
        } else {
            await prisma.orderlines.create({
                data: {
                    menus_id: menu.id,
                    orders_id: newOrder.id,
                    quantity: quantity,
                },
            });
        }
    });
    res.send({ order: newOrder });
}

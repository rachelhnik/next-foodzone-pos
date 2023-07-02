import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { status, menuId } = req.body;
    await prisma.orderlines.updateMany({
        data: {
            order_status: status,
        },
        where: {
            menus_id: menuId,
        },
    });
    res.send(200);
}

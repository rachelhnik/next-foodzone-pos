import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const menuCatId = parseInt(req.query.id as string, 10);
        await prisma.branches_menucategories_menus.deleteMany({
            where: {
                menucategory_id: menuCatId,
            },
        });
        await prisma.menu_categories.delete({ where: { id: menuCatId } });
        res.send(200);
    }
}

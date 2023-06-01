import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const menuId = parseInt(req.query.menuId as string, 10);
        console.log(typeof menuId);
        await prisma.menu_addons.deleteMany({ where: { menu_id: menuId } });
        await prisma.branches_menucategories_menus.deleteMany({
            where: { menu_id: menuId },
        });
        await prisma.menus.delete({ where: { id: menuId } });
        res.send(200);
    }
}

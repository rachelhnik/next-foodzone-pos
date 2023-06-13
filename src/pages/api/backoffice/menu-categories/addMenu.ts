import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { addedMenu, menuCategoryId, branchId } = req.body;

    const rowWithNullMenuId =
        await prisma.branches_menucategories_menus.findFirst({
            where: {
                menu_id: null,
                menucategory_id: menuCategoryId,
                branch_id: branchId,
            },
        });
    if (rowWithNullMenuId) {
        await prisma.branches_menucategories_menus.update({
            data: {
                menu_id: addedMenu.id,
            },
            where: {
                id: rowWithNullMenuId.id,
            },
        });
    } else {
        await prisma.branches_menucategories_menus.create({
            data: {
                menu_id: addedMenu.id,
                menucategory_id: menuCategoryId,
                branch_id: branchId,
            },
        });
    }

    res.send(200);
}

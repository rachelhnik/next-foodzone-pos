import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { menuToRemove, menuCategoryId, selectedBranchId } = req.body;
    const rowToRemove = await prisma.branches_menucategories_menus.findFirst({
        where: {
            menu_id: menuToRemove.id,
            menucategory_id: menuCategoryId,
            branch_id: selectedBranchId,
        },
    });

    await prisma.branches_menucategories_menus.delete({
        where: { id: rowToRemove?.id },
    });
    res.send(200);
}

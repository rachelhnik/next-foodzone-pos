import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "PUT") {
        const menuId = parseInt(req.query.menuId as string, 10);
        const branchId = parseInt(req.body.branchId as string, 10);
        const currentMenuStatus = req.body.currentBranchesData.filter(
            (data: any) => {
                return data.menu_id === menuId && data.branch_id === branchId;
            }
        );
        const { is_available_menu } = currentMenuStatus[0];
        const updateData =
            await prisma.branches_menucategories_menus.updateMany({
                where: { menu_id: menuId, branch_id: branchId },
                data: {
                    is_available_menu: is_available_menu,
                },
            });
        res.send(200);
    }
}

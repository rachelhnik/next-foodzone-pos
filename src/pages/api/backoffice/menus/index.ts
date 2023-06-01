import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { menu, currentBranchId } = req.body;
        const {
            name,
            price,
            isAvailable,
            description,
            menucategoryIds,
            asset_url,
        } = menu;
        const branchId = parseInt(currentBranchId);
        const newMenu = await prisma.menus.create({
            data: {
                name: name,
                price: price,
                asset_url: asset_url,
                description: description,
            },
        });
        const newBranchMenucatsMenu = await prisma.$transaction(
            menucategoryIds.map((menucat: any) =>
                prisma.branches_menucategories_menus.create({
                    data: {
                        branch_id: branchId,
                        menu_id: newMenu.id,
                        menucategory_id: menucat,
                        is_available_menu: isAvailable,
                    },
                })
            )
        );

        res.send(200);
    }
}

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

        const branchId = parseInt(currentBranchId as string, 10);

        const newMenu = await prisma.menus.create({
            data: {
                name: name,
                price: price,
                asset_url: asset_url,
                description: description,
            },
        });
        const branchesMenucatsMenus = await prisma.$transaction(
            menucategoryIds.map((menucatId: number) =>
                prisma.branches_menucategories_menus.createMany({
                    data: {
                        menu_id: newMenu.id,
                        menucategory_id: menucatId,
                        branch_id: branchId,
                    },
                })
            )
        );

        res.send(200);
    }
}

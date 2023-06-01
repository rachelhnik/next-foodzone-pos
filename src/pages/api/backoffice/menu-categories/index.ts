import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { menuCategory, selectedBranchIds } = req.body;
        const name = menuCategory.name as string;
        const newMenuCategory = await prisma.menu_categories.create({
            data: {
                name: name,
            },
        });
        const branchesMenucats = await prisma.$transaction(
            selectedBranchIds.map((id: number) =>
                prisma.branches_menucategories_menus.create({
                    data: {
                        menucategory_id: newMenuCategory.id,
                        branch_id: id,
                    },
                })
            )
        );
        res.send(200);
    }
}

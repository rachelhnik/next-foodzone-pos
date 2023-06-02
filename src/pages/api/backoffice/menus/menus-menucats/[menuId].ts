import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const menuId = parseInt(req.query.menuId as string, 10);
        const menuCatIds = req.body.menuCatIds;
        const branchId = parseInt(req.body.branchId, 10);
        await prisma.$transaction(
            menuCatIds.map((id: any) =>
                prisma.branches_menucategories_menus.create({
                    data: {
                        menu_id: menuId,
                        branch_id: branchId,
                        menucategory_id: id,
                    },
                })
            )
        );

        res.send(200);
    }
    if (req.method === "DELETE") {
        console.log(req.query);
        res.send(200);
    }
}

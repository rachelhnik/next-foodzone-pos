import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const branchId = Number(req.query.branchId);

        if (!branchId) return res.status(400).send("Bad request");
        const branchesMenucategoriesMenus =
            await prisma.branches_menucategories_menus.findMany({
                where: {
                    branch_id: branchId,
                },
            });
        return res.status(200).send(branchesMenucategoriesMenus);
    }
    res.status(405).send("Method not allowed");
}

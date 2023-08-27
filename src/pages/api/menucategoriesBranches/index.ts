import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const menucategoryId = Number(req.query.menucategoryId);

        if (!menucategoryId) return res.status(400).send("Bad request");
        const branchesMenucategoriesMenus =
            await prisma.branches_menucategories_menus.findMany({
                where: {
                    menucategory_id: menucategoryId,
                },
            });
        res.status(200).send(branchesMenucategoriesMenus);
    }
}

import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, addoncategoryId } = req.body;
    await prisma.addons.create({
        data: { name: name, addon_categories_id: addoncategoryId },
    });

    res.send(200);
}

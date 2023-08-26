import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, price, addoncategoryId } = req.body;
    const newAddon = await prisma.addons.create({
        data: {
            name: name,
            price: price,
            addon_categories_id: addoncategoryId,
        },
    });

    res.send(newAddon);
}

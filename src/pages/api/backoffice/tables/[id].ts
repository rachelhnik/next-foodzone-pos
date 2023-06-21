import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const id = parseInt(req.query.id as string, 10);
        await prisma.tables.update({
            data: {
                is_archived: true,
            },
            where: { id: id },
        });
        res.send(200);
    }
}

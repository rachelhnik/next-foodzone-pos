import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "PUT") {
        const tableId = parseInt(req.query.id as string, 10);
        const { name } = req.body;
        const updatedTable = await prisma.tables.update({
            data: { name: name },
            where: { id: tableId },
        });
        res.send(updatedTable);
    } else if (req.method === "DELETE") {
        const tableId = parseInt(req.query.id as string, 10);
        const deletedTable = await prisma.tables.update({
            data: {
                is_archived: true,
            },
            where: { id: tableId },
        });
        res.send(deletedTable);
    }
}

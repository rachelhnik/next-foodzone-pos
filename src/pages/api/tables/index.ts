import { getQrCodeUrl } from "@/utils";
import { prisma } from "@/utils/db";
import { qrCodeImageUpload } from "@/utils/fileUpload";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { name, branchId } = req.body;
        const isValid = name && branchId;
        if (!isValid) return res.send(400);
        const table = await prisma.tables.create({
            data: {
                name: name,
                branch_id: Number(branchId),
            },
        });
        await qrCodeImageUpload(Number(branchId), table.id);
        const qrCodeUrl = getQrCodeUrl(Number(branchId), table.id);

        await prisma.tables.update({
            data: { asset_url: qrCodeUrl },
            where: { id: table.id },
        });

        res.send(200);
    }
    if (req.method === "PUT") {
        const { tableId, name } = req.body;
        await prisma.tables.update({
            data: { name: name },
            where: { id: Number(tableId) },
        });
        res.send(200);
    }
}

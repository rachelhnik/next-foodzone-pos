import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const townshipId = parseInt(req.body.townshipId as string, 10);
        const companyId = req.body.companyId;
        const address = req.body.address;
        const newBranch = await prisma.branches.create({
            data: {
                address: address,
                township_id: townshipId,
                company_id: companyId,
            },
        });
        res.send(newBranch);
    }
}

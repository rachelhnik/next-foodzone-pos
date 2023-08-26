import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "PUT") {
        const companyId = parseInt(req.query.id as string, 10);
        const name = req.body.name as string;
        const updateCompany = await prisma.companies.update({
            where: {
                id: companyId,
            },
            data: {
                name: name,
            },
        });
        res.send(updateCompany);
    }
}

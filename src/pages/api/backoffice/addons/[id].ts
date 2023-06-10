import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = parseInt(req.query.id as string, 10);
    const { name } = req.body;
    await prisma.addons.update({ data: { name: name }, where: { id: id } });
    res.send(200);
}

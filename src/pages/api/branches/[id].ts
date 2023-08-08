import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "PUT") {
        const branchId = parseInt(req.query.id as string, 10);
        const { id, address } = req.body;
        const newBranchAddress = await prisma.branches.update({
            where: { id: id },
            data: { address: address },
        });
        res.send(newBranchAddress);
    }
    if (req.method === "DELETE") {
        const branchId = parseInt(req.query.id as string, 10);
        await prisma.branches_addons.deleteMany({
            where: {
                branch_id: branchId,
            },
        });
        await prisma.branches_menucategories_menus.deleteMany({
            where: {
                branch_id: branchId,
            },
        });

        await prisma.branches_addons.deleteMany({
            where: {
                branch_id: branchId,
            },
        });
        const deletedBranch = await prisma.branches.delete({
            where: {
                id: branchId,
            },
        });

        res.send(deletedBranch);
    }
}

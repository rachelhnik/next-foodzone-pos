import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const menuCatId = parseInt(req.query.id as string, 10);
        await prisma.branches_menucategories_menus.deleteMany({
            where: {
                menucategory_id: menuCatId,
            },
        });
        await prisma.menu_categories.delete({ where: { id: menuCatId } });
        res.send(200);
    }

    if (req.method === "PUT") {
        const { newMenuCategory, menuCategoryId } = req.body;

        const { name, branches } = newMenuCategory;

        const branchIds = branches.map((branch: any) => branch.id) as number[];

        await prisma.menu_categories.update({
            data: { name: name },
            where: { id: menuCategoryId },
        });

        if (!branchIds.length) {
            // find the row in which menuId is already null to delete that row
            const bothNull =
                await prisma.branches_menucategories_menus.findMany({
                    where: {
                        menu_id: null,
                        menucategory_id: menuCategoryId,
                    },
                });

            const nullIds = bothNull.map((data) => data.id);

            await prisma.branches_menucategories_menus.deleteMany({
                where: {
                    id: {
                        in: nullIds,
                    },
                },
            });

            //if menu_id is not null , just update the branch_id column null
            await prisma.branches_menucategories_menus.updateMany({
                data: { branch_id: null },
                where: { menucategory_id: menuCategoryId },
            });
            return res.send(200);
        }

        // finding branches asscociated with current menucategory
        const branchesMenucategoriesMenus =
            await prisma.branches_menucategories_menus.findMany({
                where: { menucategory_id: menuCategoryId },
            });

        const existingBranchIds = branchesMenucategoriesMenus.map(
            (item) => item.branch_id
        ) as number[];

        // if payload branchIds are not included in existing ids , it is added

        const addedBranchIds = branchIds.filter(
            (branchId: number) => !existingBranchIds.includes(branchId)
        ) as number[];

        // if existing branchIds are not included in payload branchIds, it is removed

        const removedBranchIds = existingBranchIds.filter(
            (id) => !branchIds.includes(id)
        ) as number[];

        if (addedBranchIds.length) {
            addedBranchIds.forEach(async (addedBranchId) => {
                const rowWithNullBranchId =
                    await prisma.branches_menucategories_menus.findFirst({
                        where: {
                            menucategory_id: menuCategoryId,
                            branch_id: null,
                        },
                    });
                if (rowWithNullBranchId) {
                    await prisma.branches_menucategories_menus.update({
                        data: { branch_id: addedBranchId },
                        where: { id: rowWithNullBranchId.id },
                    });
                } else {
                    await prisma.branches_menucategories_menus.create({
                        data: {
                            menucategory_id: menuCategoryId,
                            branch_id: addedBranchId,
                        },
                    });
                }
            });
            res.send(200);
        }

        if (removedBranchIds.length) {
            removedBranchIds.forEach(async (branchId) => {
                const row =
                    await prisma.branches_menucategories_menus.findFirst({
                        where: {
                            menucategory_id: menuCategoryId,
                            branch_id: branchId,
                        },
                    });
                if (row && row.menu_id) {
                    await prisma.branches_menucategories_menus.update({
                        data: { branch_id: null },
                        where: { id: row.id },
                    });
                } else if (row && row.menu_id === null) {
                    await prisma.branches_menucategories_menus.delete({
                        where: { id: row.id },
                    });
                }
            });
            res.send(200);
        }
    }
    res.send(200);
}

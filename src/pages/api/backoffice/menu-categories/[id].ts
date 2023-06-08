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
        const menuCatId = parseInt(req.query.id as string, 10);

        const { name, branches } = req.body;
        const branchIds = branches.map((data: any) => data.id);

        await prisma.menu_categories.update({
            data: { name: name },
            where: { id: menuCatId },
        });

        if (!branchIds.length) {
            // find the row in which menuId is already null to delete that row
            const bothNull =
                await prisma.branches_menucategories_menus.findMany({
                    where: {
                        menu_id: null,
                        menucategory_id: menuCatId,
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
                where: { menucategory_id: menuCatId },
            });
            return res.send(200);
        }

        // finding branches asscociated with current menucategory
        const branchesMenucategoriesMenus =
            await prisma.branches_menucategories_menus.findMany({
                where: { menucategory_id: menuCatId },
            });

        const existingBranchIds = branchesMenucategoriesMenus.map(
            (item) => item.branch_id
        );

        // if payload branchIds are not included in existing ids , it is added

        const addedBranchIds = branchIds.filter(
            (branchId: number) => !existingBranchIds.includes(branchId)
        ) as number[];

        // if existing branchIds are not included in payload branchIds, it is removed

        const removedBranchIds = existingBranchIds.filter(
            (id) => !branchIds.includes(id)
        ) as number[];

        if (addedBranchIds.length) {
            // find the row which has menu_id and menu_cat id with no branch_id first

            const nullBranchIdRows =
                await prisma.branches_menucategories_menus.findMany({
                    where: {
                        menucategory_id: menuCatId,
                        branch_id: null,
                    },
                });
            const nullBranchIds = nullBranchIdRows.map((item) => item.id);
            if (nullBranchIdRows.length) {
                /*
                1.break addedIds into towarrays : first half for same length with nullIds and second half for remaining ones
                2.added first half into null spaces which have both menuId and menucatId
                2.if remaining addedIds present, create new rows
                */
                const sameLengthIds = addedBranchIds.splice(
                    0,
                    nullBranchIdRows.length
                );
                nullBranchIds.forEach(async (id, i) => {
                    await prisma.branches_menucategories_menus.update({
                        data: {
                            branch_id: sameLengthIds[i],
                        },
                        where: {
                            id: id,
                        },
                    });
                });
                if (addedBranchIds.length) {
                    const newBranchesMenucatsMenus = addedBranchIds.map(
                        (branchId: number) => ({
                            menucategory_id: menuCatId,
                            branch_id: branchId,
                        })
                    );

                    await prisma.$transaction(
                        newBranchesMenucatsMenus.map((item) =>
                            prisma.branches_menucategories_menus.create({
                                data: item,
                            })
                        )
                    );
                }
                res.send(200);
            } else {
                // if there is no null branchId space with both menuid and menucatId , just add new rows
                const newBranchesMenucatsMenus = addedBranchIds.map(
                    (branchId: number) => ({
                        menucategory_id: menuCatId,
                        branch_id: branchId,
                    })
                );

                await prisma.$transaction(
                    newBranchesMenucatsMenus.map((item) =>
                        prisma.branches_menucategories_menus.create({
                            data: item,
                        })
                    )
                );

                res.send(200);
            }
        }
        if (removedBranchIds.length) {
            removedBranchIds.forEach(async (branchId) => {
                const row =
                    await prisma.branches_menucategories_menus.findFirst({
                        where: {
                            menucategory_id: menuCatId,
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
}

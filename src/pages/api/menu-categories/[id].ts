import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { menus as Menu } from "@prisma/client";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const menuCatId = parseInt(req.query.id as string, 10);
        const branchId = parseInt(req.query.branchId as string, 10);
        const deletedMenuCategory = await prisma.menu_categories.update({
            data: {
                is_archived: true,
            },
            where: { id: menuCatId },
        });

        await prisma.branches_menucategories_menus.deleteMany({
            where: {
                menucategory_id: menuCatId,
                branch_id: branchId,
            },
        });

        return res.status(200).send(deletedMenuCategory);
    }

    if (req.method === "PUT") {
        const { selectedMenus, menuCategoryId, branchId, name } = req.body;
        const selectedMenusIds = selectedMenus.map((menu: Menu) => menu.id);

        const updatedMenuCategory = await prisma.menu_categories.update({
            data: {
                name: name,
            },
            where: {
                id: menuCategoryId,
            },
        });
        const branchesMenucategoriesMenus =
            await prisma.branches_menucategories_menus.findMany({
                where: {
                    branch_id: branchId,
                    menucategory_id: menuCategoryId,
                },
            });
        const existingMenusIds = branchesMenucategoriesMenus.map(
            (item) => item.menu_id
        ) as number[];
        const addedMenusIds = selectedMenusIds.filter(
            (menuId: number) => !existingMenusIds.includes(menuId)
        ) as number[];

        const removedMenusIds = existingMenusIds.filter(
            (menuId: number) => !selectedMenusIds.includes(menuId)
        ) as number[];

        const processChanges = async () => {
            if (addedMenusIds.length) {
                const rowsWithNullMenuId =
                    await prisma.branches_menucategories_menus.findMany({
                        where: {
                            menu_id: null,
                            menucategory_id: menuCategoryId,
                            branch_id: branchId,
                        },
                    });

                const menuIdsToReplace = addedMenusIds.slice(
                    0,
                    rowsWithNullMenuId.length
                );
                const menuIdsToCreate = addedMenusIds.slice(
                    rowsWithNullMenuId.length
                );

                await Promise.all(
                    menuIdsToReplace.map(async (menuId, index) => {
                        if (rowsWithNullMenuId) {
                            await prisma.branches_menucategories_menus.update({
                                data: {
                                    menu_id: menuId,
                                },
                                where: {
                                    id: rowsWithNullMenuId[index].id,
                                },
                            });
                        }
                    })
                );

                await Promise.all(
                    menuIdsToCreate.map(async (menuId, index) => {
                        await prisma.branches_menucategories_menus.create({
                            data: {
                                menu_id: menuId,
                                menucategory_id: menuCategoryId,
                                branch_id: branchId,
                            },
                        });
                    })
                );
            }
            if (removedMenusIds.length) {
                await Promise.all(
                    removedMenusIds.map(async (menuId) => {
                        const rowToRemove =
                            await prisma.branches_menucategories_menus.findFirst(
                                {
                                    where: {
                                        menu_id: menuId,
                                        menucategory_id: menuCategoryId,
                                        branch_id: branchId,
                                    },
                                }
                            );

                        await prisma.branches_menucategories_menus.delete({
                            where: { id: rowToRemove?.id },
                        });
                    })
                );
            }
        };

        processChanges()
            .then(() => {
                res.status(200).send(updatedMenuCategory);
            })
            .catch((error) => {
                // Handle error appropriately
                console.error(error);
                res.status(500).send("Internal Server Error");
            });
    }
}

import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { menus as Menu } from "@prisma/client";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const menuCatId = parseInt(req.query.id as string, 10);
        const deletedMenuCategory = await prisma.menu_categories.update({
            data: {
                is_archived: true,
            },
            where: { id: menuCatId },
        });

        return res.status(200).send(deletedMenuCategory);
    }

    if (req.method === "PUT") {
        const { selectedMenus, menuCategoryId, branchId } = req.body;
        const selectedMenusIds = selectedMenus.map((menu: Menu) => menu.id);
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

        if (addedMenusIds.length) {
            const rowWithNullMenuId =
                await prisma.branches_menucategories_menus.findFirst({
                    where: {
                        menu_id: null,
                        menucategory_id: menuCategoryId,
                        branch_id: branchId,
                    },
                });
            addedMenusIds.forEach(async (menuId) => {
                if (rowWithNullMenuId) {
                    await prisma.branches_menucategories_menus.update({
                        data: {
                            menu_id: menuId,
                        },
                        where: {
                            id: rowWithNullMenuId.id,
                        },
                    });
                }
                await prisma.branches_menucategories_menus.create({
                    data: {
                        menu_id: menuId,
                        menucategory_id: menuCategoryId,
                        branch_id: branchId,
                    },
                });
            });
        } else if (removedMenusIds.length) {
            removedMenusIds.forEach(async (menuId) => {
                const rowToRemove =
                    await prisma.branches_menucategories_menus.findFirst({
                        where: {
                            menu_id: menuId,
                            menucategory_id: menuCategoryId,
                            branch_id: branchId,
                        },
                    });

                await prisma.branches_menucategories_menus.delete({
                    where: { id: rowToRemove?.id },
                });
            });
        }

        res.send(200);
    }
}

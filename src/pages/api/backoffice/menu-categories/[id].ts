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
        const menuCategoryId = parseInt(req.query.id as string, 10);
        const { name, menus, branchId } = req.body;

        await prisma.menu_categories.update({
            data: { name: name },
            where: { id: menuCategoryId },
        });
        const menusIds = menus.map((menu: any) => menu.id) as number[];

        const branchesMenucatMenus =
            await prisma.branches_menucategories_menus.findMany({
                where: { menucategory_id: menuCategoryId },
            });
        const currentMenuIds = branchesMenucatMenus.map(
            (data) => data.menu_id
        ) as number[];

        const addedMenuIds = menusIds.filter(
            (menuId: number) => !currentMenuIds.includes(menuId)
        );
        const removedMenuIds = currentMenuIds.filter(
            (currentmenuId: number) => !menusIds.includes(currentmenuId)
        ) as number[];

        if (addedMenuIds) {
            addedMenuIds.forEach(async (addedMenuId) => {
                const onlyMenuNullRow =
                    await prisma.branches_menucategories_menus.findFirst({
                        where: {
                            menu_id: null,
                            menucategory_id: menuCategoryId,
                            branch_id: branchId,
                        },
                    });
                if (onlyMenuNullRow) {
                    await prisma.branches_menucategories_menus.update({
                        data: { menu_id: addedMenuId },
                        where: { id: onlyMenuNullRow.id },
                    });
                } else {
                    await prisma.branches_menucategories_menus.create({
                        data: {
                            menu_id: addedMenuId,
                            branch_id: branchId,
                            menucategory_id: menuCategoryId,
                        },
                    });
                }
            });
        }
        if (removedMenuIds) {
            removedMenuIds.forEach(async (removedMenuId) => {
                const rowToDelete =
                    await prisma.branches_menucategories_menus.findFirst({
                        where: {
                            menu_id: removedMenuId,
                            menucategory_id: menuCategoryId,
                            branch_id: branchId,
                        },
                    });
                if (rowToDelete) {
                    await prisma.branches_menucategories_menus.delete({
                        where: { id: rowToDelete.id },
                    });
                }
            });
        }

        res.send(200);
    }
}

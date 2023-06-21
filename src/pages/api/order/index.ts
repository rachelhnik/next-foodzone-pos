import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const branchId = req.query.branchId as string;

    const branchesMenucategoriesMenus =
        await prisma.branches_menucategories_menus.findMany({
            where: { branch_id: { in: Number(branchId) } },
        });
    const menucategoriesIds = branchesMenucategoriesMenus.map(
        (item) => item.menucategory_id
    ) as number[];
    const menusIds = branchesMenucategoriesMenus.map(
        (item) => item.menu_id
    ) as number[];

    const menuCategoriesForCurrentBranch =
        await prisma.menu_categories.findMany({
            where: { id: { in: menucategoriesIds } },
        });

    const menusForCurrentBranch = await prisma.menus.findMany({
        where: { id: { in: menusIds } },
    });

    const menuAddonCategories = await prisma.menu_addoncategories.findMany({
        where: { menu_id: { in: menusIds } },
    });
    const addoncategoriesIds = menuAddonCategories.map(
        (item) => item.addoncategory_id
    ) as number[];
    const addonCategories = await prisma.addon_categories.findMany({
        where: { id: { in: addoncategoriesIds } },
    });
    const addons = await prisma.addons.findMany({
        where: { addon_categories_id: { in: addoncategoriesIds } },
    });
    res.send({
        menucat: menuCategoriesForCurrentBranch,
        menus: menusForCurrentBranch,
        addoncategories: addonCategories,
        addons: addons,
        branchesMenucategoriesMenus: branchesMenucategoriesMenus,
        menuAddonCategories: menuAddonCategories,
    });
}

import { prisma } from "@/utils/db";
import { CognitoSync } from "aws-sdk";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { convertToObject } from "typescript";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getSession({ req });
    if (!session) return res.send(401);
    const user = session.user;

    const email = user?.email as string;
    const name = user?.name as string;
    const userFromDB = await prisma.users.findFirst({
        where: {
            email,
        },
    });

    if (!userFromDB) {
        const newCompany = await prisma.companies.create({
            data: {
                name: "Default companies",
            },
        });
        const newUser = await prisma.users.create({
            data: {
                name,
                email,
                password: "",
                company_id: newCompany.id,
                role: "admin",
            },
        });

        const townshipsNames = [
            { name: "Hledan" },
            { name: "Tamwe" },
            { name: "South Okkala" },
            { name: "Mayangone" },
            { name: "Insein" },
            { name: "Thingangyun" },
            { name: "Ahlone" },
            { name: "Yankin" },
        ];

        const townships = await prisma.$transaction(
            townshipsNames.map((townshipName) =>
                prisma.townships.create({
                    data: townshipName,
                })
            )
        );

        const newBranch = await prisma.branches.create({
            data: {
                address: "default address",
                township_id: townships[0].id,
                company_id: newCompany.id,
            },
        });
        const newMenusData = [
            { name: "pasta", price: 3000 },
            { name: "pizza", price: 3000 },
        ];
        const newMenus = await prisma.$transaction(
            newMenusData.map((menu) => prisma.menus.create({ data: menu }))
        );

        const newMenuCategoriesData = [
            { name: "Default category 1" },
            { name: "Default category 2" },
        ];
        const newMenuCategories = await prisma.$transaction(
            newMenuCategoriesData.map((menuCat) =>
                prisma.menu_categories.create({ data: menuCat })
            )
        );

        const newBranchesMenucategoriesMenusData = [
            {
                menu_id: newMenus[0].id,
                menucategory_id: newMenuCategories[0].id,
                branch_id: newBranch.id,
                is_available: true,
            },
            {
                menu_id: newMenus[0].id,
                menucategory_id: newMenuCategories[1].id,
                branch_id: newBranch.id,
                is_available: true,
            },
            {
                menu_id: newMenus[1].id,
                menucategory_id: newMenuCategories[0].id,
                branch_id: newBranch.id,
                is_available: true,
            },
            {
                menu_id: newMenus[1].id,
                menucategory_id: newMenuCategories[1].id,
                branch_id: newBranch.id,
                is_available: true,
            },
        ];

        const newBranchesMenucategoriesMenus = await prisma.$transaction(
            newBranchesMenucategoriesMenusData.map((item) =>
                prisma.branches_menucategories_menus.create({
                    data: item,
                })
            )
        );

        const newAddonCategoriesData = [
            { name: "Drinks", is_required: false },
            { name: "Sizes", is_required: true },
        ];
        const newAddonCategories = await prisma.$transaction(
            newAddonCategoriesData.map((addonCategory) =>
                prisma.addon_categories.create({ data: addonCategory })
            )
        );
        const newAddonsData = [
            {
                name: "Cola",

                addon_categories_id: newAddonCategories[0].id,
            },
            {
                name: "Pepsi",

                addon_categories_id: newAddonCategories[0].id,
            },
            {
                name: "Large",

                addon_categories_id: newAddonCategories[1].id,
            },
            {
                name: "Normal",

                addon_categories_id: newAddonCategories[1].id,
            },
        ];
        const newAddons = await prisma.$transaction(
            newAddonsData.map((newAddon) =>
                prisma.addons.create({ data: newAddon })
            )
        );

        return res.send({
            menus: newMenus,
            menuCategories: newMenuCategories,
            addons: newAddons,
            addonCategories: newAddonCategories,
            branches: newBranch,
            branchesMenucategoriesMenus: newBranchesMenucategoriesMenus,
            company: newCompany,
            townships: townships,
            user: newUser,
        });
    } else {
        const companyId = userFromDB.company_id;
        const company = await prisma.companies.findFirst({
            where: {
                id: companyId,
            },
        });

        const branches = await prisma.branches.findMany({
            where: {
                company_id: companyId,
            },
        });

        const branchesId = branches.map((branch) => branch.id);

        const branchesMenucategoriesMenus =
            await prisma.branches_menucategories_menus.findMany({
                where: {
                    branch_id: {
                        in: branchesId,
                    },
                },
            });

        const validBranchesMenucatsMenus = branchesMenucategoriesMenus.filter(
            (data) => data.menu_id !== null
        );

        const menusIds = validBranchesMenucatsMenus.map(
            (data) => data.menu_id
        ) as number[];

        const menus = await prisma.menus.findMany({
            where: {
                id: {
                    in: menusIds,
                },
            },
        });
        const menuCategoriesIds = branchesMenucategoriesMenus.map(
            (data) => data.menucategory_id
        ) as number[];

        const menuCategories = await prisma.menu_categories.findMany({
            where: {
                id: {
                    in: menuCategoriesIds,
                },
            },
        });
        const menuAddonIds = await prisma.menu_addons.findMany({
            where: {
                menu_id: {
                    in: menusIds,
                },
            },
        });
        const addonIds = menuAddonIds.map((data) => data.addon_id) as number[];
        const addons = await prisma.addons.findMany({
            where: {
                id: {
                    in: addonIds,
                },
            },
        });
        const addonCategoriesIds = addons.map(
            (data) => data.addon_categories_id
        ) as number[];
        const addonCategories = await prisma.addon_categories.findMany({
            where: {
                id: {
                    in: addonCategoriesIds,
                },
            },
        });
        const townships = await prisma.townships.findMany({
            select: {
                id: true,
                name: true,
            },
        });

        res.send({
            menus: menus,
            menuCategories: menuCategories,
            addons: addons,
            addonCategories: addonCategories,
            branches: branches,
            branchesMenucategoriesMenus: validBranchesMenucatsMenus,
            company: company,
            townships: townships,
            user: userFromDB,
        });
    }
}

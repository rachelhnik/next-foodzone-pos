import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { menu, currentBranchId } = req.body;
        const {
            name,
            price,

            description,
            menuCategoryIds,
            asset_url,
        } = menu;

        const branchId = parseInt(currentBranchId as string, 10);

        const newMenu = await prisma.menus.create({
            data: {
                name: name,
                price: price,
                asset_url: asset_url,
                description: description,
            },
        });

        if (menuCategoryIds.length) {
            menuCategoryIds.forEach(async (menucatId: number) => {
                const onlyMenuIdNeededRow =
                    await prisma.branches_menucategories_menus.findFirst({
                        where: {
                            menucategory_id: menucatId,
                            branch_id: branchId,
                            menu_id: null,
                        },
                    });
                if (onlyMenuIdNeededRow !== null) {
                    await prisma.branches_menucategories_menus.update({
                        data: {
                            menu_id: newMenu.id,
                        },
                        where: {
                            id: onlyMenuIdNeededRow.id,
                        },
                    });
                } else {
                    await prisma.branches_menucategories_menus.create({
                        data: {
                            menu_id: newMenu.id,
                            menucategory_id: menucatId,
                            branch_id: branchId,
                        },
                    });
                }
            });
        } else {
            await prisma.branches_menucategories_menus.create({
                data: {
                    menu_id: newMenu.id,
                    branch_id: branchId,
                },
            });
        }

        res.status(200).send(newMenu);
    }

    res.send(200);
}

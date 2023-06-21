import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "PUT") {
        const menuId = parseInt(req.query.menuId as string, 10);
        const { name, price, asset_url, description, addonCategories } =
            req.body;
        const menu = await prisma.menus.findUnique({
            where: {
                id: menuId,
            },
        });
        const assetUrl = menu?.asset_url;
        if (!asset_url)
            await prisma.menus.update({
                where: {
                    id: menuId,
                },
                data: {
                    name: name,
                    price: price,
                    asset_url: asset_url === "" ? assetUrl : asset_url,
                    description: description,
                },
            });

        const addonCategoryIds = addonCategories.map(
            (addoncat: any) => addoncat.id
        ) as number[];

        const currentAddoncategories =
            await prisma.menu_addoncategories.findMany({
                where: { menu_id: menuId },
            });
        const currentAddoncatIds = currentAddoncategories.map(
            (addoncat) => addoncat.addoncategory_id
        ) as number[];
        const addedAddoncatIds = addonCategoryIds.filter(
            (id) => !currentAddoncatIds.includes(id)
        );
        const removedAddoncatIds = currentAddoncatIds.filter(
            (id) => !addonCategoryIds.includes(id)
        );
        if (addedAddoncatIds) {
            addedAddoncatIds.forEach(async (addedId) => {
                await prisma.menu_addoncategories.create({
                    data: { menu_id: menuId, addoncategory_id: addedId },
                });
            });
        }
        if (removedAddoncatIds) {
            removedAddoncatIds.forEach(async (removedId) => {
                const rowToDelete = await prisma.menu_addoncategories.findFirst(
                    {
                        where: { menu_id: menuId, addoncategory_id: removedId },
                    }
                );
                await prisma.menu_addoncategories.delete({
                    where: { id: rowToDelete?.id },
                });
            });
        }
        res.send(200);
    } else if (req.method === "DELETE") {
        console.log(req.query);
        const menuId = parseInt(req.query.menuId as string, 10);
        await prisma.menus.update({
            data: {
                is_archived: true,
            },
            where: { id: menuId },
        });
        return res.send(200);
    }
}

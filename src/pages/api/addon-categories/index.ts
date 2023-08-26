import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { addonCategory, selectedMenuIds } = req.body;
    const { name, is_required } = addonCategory;
    const newAddonCategory = await prisma.addon_categories.create({
        data: {
            name: name,
            is_required: is_required,
        },
    });
    selectedMenuIds.forEach(async (selectedMenuId: number) => {
        await prisma.menu_addoncategories.create({
            data: {
                menu_id: selectedMenuId,
                addoncategory_id: newAddonCategory.id,
            },
        });
    });
    res.status(200).send(newAddonCategory);
}

import { prisma } from "@/utils/db";
import { private_safeAlpha } from "@mui/system";
import { NextApiRequest, NextApiResponse } from "next";
import { Press_Start_2P } from "next/font/google";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "PUT") {
        const addonCategoryId = parseInt(req.query.id as string, 10);
        const { name, is_required, selectedAddons } = req.body;
        const updatedAddoncategory = await prisma.addon_categories.update({
            data: {
                name: name,
                is_required: is_required,
            },
            where: { id: addonCategoryId },
        });
        const selectedAddonsIds = selectedAddons.map(
            (addon: any) => addon.id
        ) as number[];
        const currentAddons = await prisma.addons.findMany({
            where: { addon_categories_id: addonCategoryId },
        });
        const currentAddonsIds = currentAddons.map(
            (addon) => addon.id
        ) as number[];

        const addedAddonsIds = selectedAddonsIds.filter(
            (selectedId) => !currentAddonsIds.includes(selectedId)
        );
        const removedAddonsIds = currentAddonsIds.filter(
            (removedId) => !selectedAddonsIds.includes(removedId)
        );
        res.status(200).send(updatedAddoncategory);
    } else if (req.method === "DELETE") {
        const addonCategoryId = parseInt(req.query.id as string, 10);
        const deletedAddoncategory = await prisma.addon_categories.update({
            data: {
                is_archived: true,
            },
            where: { id: addonCategoryId },
        });
        await prisma.menu_addoncategories.deleteMany({
            where: {
                addoncategory_id: addonCategoryId,
            },
        });
        res.status(200).send(deletedAddoncategory);
    }
}
